import GroupChat from "./GroupChat";
import Message from "./Message";
import Person from "./Person";

export default class WhatsappLexer {
    private _lines: string[];

    constructor(input: string) {
        this._lines = input.trim().split("\n");
    }

    public lex() {
        let createdBy, createdOn, groupName;

        const personMap: Map<string, Person> = new Map();
        const memberAddDates = new Map<Person, { date: Date; addedBy: Person | null }[]>();

        const getPerson = (name: string) => {
            if (!personMap.has(name)) {
                personMap.set(name, new Person(name, []));
            }
            return personMap.get(name)!;
        };

        const rawMessages: {
            date: Date;
            author: Person;
            content: string;
            flags?: string[];
        }[] = [];

        for (const line of this._lines) {
            if (line.length == 0) {
                // Empty line, add the newline character
                rawMessages[rawMessages.length - 1].content += "\n";
                continue;
            }

            const split = line.split("]");
            if (split.length <= 1 || !this._parseDate(split[0])) {
                // Message spans over multiple lines
                // If split length is 0, the message content is just a date,
                // but there is nothing else. Highly likely to be a continuation
                // of the previous message.
                rawMessages[rawMessages.length - 1].content += " " + line;
            } else {
                // The message has a date
                const date = this._parseDate(split[0]);
                if (!date) {
                    throw new Error("Date parsing failed");
                }

                const secondPart = split[1].trim();
                const i = secondPart.indexOf(":");
                const [authorText, innerText] = [secondPart.slice(0, i), secondPart.slice(i + 1)];
                let author = authorText.trim();
                const content = innerText.trim();

                if (new RegExp(`${author} created group (.+)`).test(content)) {
                    createdOn = date;
                    createdBy = getPerson(author.replaceAll("~", "").trim());
                } else if (new RegExp(`(?:.+)added(?:.+)`).test(content)) {
                    const match = new RegExp(`(?:.+)added(?:.+)`).exec(content)!;
                    const whoIsAdded = match[1];
                    if (whoIsAdded === undefined) {
                        continue;
                    }
                    const addedBy = getPerson(match[0].replaceAll("~", "").trim());

                    if (content.includes("Tap to see all.")) {
                        continue;
                    }

                    if (whoIsAdded === "you") {
                        memberAddDates.set(getPerson("you"), [{ date, addedBy }]);
                    } else {
                        memberAddDates.set(getPerson(whoIsAdded.replaceAll("~", "").trim()), [
                            { date, addedBy },
                        ]);
                    }
                } else if (
                    new RegExp(`${author} joined using this group's invite link`).test(content)
                ) {
                    memberAddDates.set(getPerson(author.replaceAll("~", "").trim()), [
                        { date, addedBy: null },
                    ]);
                } else if (content.includes("image omitted")) {
                    const actualContent = content.replace("image omitted", "").trim();
                    rawMessages.push({
                        date,
                        author: getPerson(author.replaceAll("~", "").trim()),
                        content: actualContent,
                        flags: ["image omitted"],
                    });
                } else if (
                    content ===
                    "Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them."
                ) {
                    groupName = author;
                } else {
                    if (groupName !== author.replaceAll("~", "").trim()) {
                        getPerson(author.replaceAll("~", "").trim()).messageIndices.push(
                            rawMessages.length
                        );
                        rawMessages.push({
                            date,
                            author: getPerson(author.replaceAll("~", "").trim()),
                            content,
                        });
                    }
                }
            }
        }

        return new GroupChat(
            groupName || "Unknown Groupchat",
            rawMessages.map((m) => new Message(m.date, m.author, m.content, m.flags || [])),
            Array.from(personMap.values()),
            createdBy || new Person("Unknown", []),
            createdOn || new Date(),
            memberAddDates
        );
    }

    private _parseDate(dateString: string): Date | undefined {
        if (dateString.length < 23 || dateString.length > 24 || dateString[0] !== "[") {
            return;
        }

        const date = dateString.substring(1);

        // 2023-05-02, 6:00:11 PM
        const split = date.split(", ");
        if (split.length !== 2) {
            return;
        }

        const datePart = split[0];
        const timePart = split[1];

        const [time, modifier] = timePart.split(" ");
        let [hours, minutes, seconds] = time.split(":");
        if (hours === "12") {
            hours = "00";
        }
        if (modifier === "PM") {
            hours = (parseInt(hours, 10) + 12).toString();
        }

        seconds = seconds.substring(0, 2);
        if (seconds.length === 1) {
            seconds = "0" + seconds;
        }

        if (hours.length === 1) {
            hours = "0" + hours;
        }

        if (minutes.length === 1) {
            minutes = "0" + minutes;
        }

        return new Date(`${datePart}T${hours}:${minutes}:${seconds}`);
    }
}
