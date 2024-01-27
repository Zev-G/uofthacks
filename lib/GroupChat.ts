import Message from "@/lib/Message";

export default class GroupChat<T extends GroupType> {
    public name: string;
    public messages: Message<T>[];

    public static fromExport<K extends GroupType>(exportString: string) {
        console.log(expo    rtString)
        const exportStringReplaced = exportString.replaceAll("~ ", "").replaceAll(" ", " ");
        let messages_raw: string[] = [];
        let unprocessed: string[] = exportStringReplaced.split(/(.*?)(\[[0-9]{4}-[0-9]{2}-[0-9]{2}, [0-9]{1,2}:[0-9]{2}:[0-9]{2}.{4})/);
        // console.log(unprocessed);
        for (let i = 0; i < unprocessed.length; i++) {
            let message = unprocessed[i];
            if (message !== "") {
                messages_raw.push(message);
            }
        }
        // console.log(messages_raw);
        const groupChatName = messages_raw[0].split(":")[0].trim();
        let messages: Message<WhatsappMessage>[] = [];
        // for each message
        for (let i = 0; i < messages_raw.length - 1; ) {
            let flags: string[] = [];
            if (messages_raw[i] == "") {
                i++;
                continue;
            } else if (messages_raw[i + 1].includes("omitted")) {
                flags.push("omitted");
            }
            let date = this._parseDateTime(messages_raw[i]);
            let author = messages_raw[i + 1].split(":")[0].replaceAll("~", "").trim();
            let text: string = messages_raw[i + 1]
                .split(":")[1]
                .replaceAll("~", "")
                .replaceAll(/<.+>/g, "")
                .trim();
            if (
                author !== "Tzevet 2023 & ME 🧬👩‍🔬🌀" &&
                !text.startsWith(author + " joined") &&
                !text.startsWith(author + " created group") &&
                !text.endsWith("added " + author)
            ) {
                messages.push(new Message(date, author, text, flags));
            }
            i += 2;
        }

        return new GroupChat<K>(groupChatName, messages);
    }

    static _parseDateTime(dateTimeStr: string): Date {
        // Remove square brackets and split into date and time parts
        const parts = dateTimeStr.replace("[", "").replace("]", "").split(", ");
        const datePart = parts[0];
        let timePart = parts[1];

        // Correctly format the time part to handle AM/PM
        const [time, modifier] = timePart.split(" ");
        let [hours, minutes, seconds]: any[] = time.split(":");

        // Correctly adjust hours for AM/PM
        if (modifier === "PM" && hours !== "12") {
            hours = parseInt(hours, 10) + 12;
        } else if (modifier === "AM" && hours === "12") {
            hours = "00";
        }

        hours = hours.toString().padStart(2, "0"); // Ensure hours are two digits

        // Combine into an ISO 8601 format
        const dateTimeISO = `${datePart}T${hours}:${minutes}:${seconds}`;

        // Create and return the Date object
        return new Date(dateTimeISO);
    }

    public constructor(name: string, messages: Message<T>[]) {
        this.name = name;
        this.messages = messages;
    }

    public toJSON(): object {
        return {
            name: this.name,
            messages: this.messages.map((message) => message.toJSON()),
        };
    }

    static fromJSON<T extends GroupType>(json: any): GroupChat<T> {
        return new GroupChat<T>(
            json.name,
            json.messages.map((message: any) => Message.fromJSON<T>(message))
        );
    }
}
