import { Word } from "react-wordcloud";
import Message from "./Message";
import Person from "./Person";
import WhatsappLexer from "./WhatsappLexer";

const conversationThresholdMinutes = 15;
const smallConversationLength = 20;
const minConvserationLength = 5;

export default class GroupChat<T extends GroupType> {
    public readonly name: string;
    public readonly messages: Message<T>[];
    public readonly createdBy: Person;
    public readonly createdOn: Date;
    public readonly members: Person[] = [];
    public readonly memberAddDates?: Map<Person, { date: Date; addedBy: Person | null }[]> =
        new Map();

    public static fromExport<K extends GroupType>(exportString: string) {
        return new WhatsappLexer(exportString).lex();
    }

    public constructor(
        name: string,
        messages: Message<T>[],
        members: Person[],
        createdBy: Person,
        createdOn: Date,
        memberAddDates?: Map<Person, { date: Date; addedBy: Person | null }[]>
    ) {
        this.name = name;
        this.messages = messages;
        this.members = members;
        this.createdBy = createdBy;
        this.createdOn = createdOn;

        if (memberAddDates) {
            this.memberAddDates = memberAddDates;
        }
    }

    public toJSON(): object {
        return {
            name: this.name,
            messages: this.messages.map((message) => message.toJSON()),
            createdBy: this.createdBy.toJSON(),
            createdOn: this.createdOn.getTime(),
            members: this.members.map((member) => member.toJSON()),
            memberAddDates: this.memberAddDates
                ? Object.fromEntries(
                      Array.from(this.memberAddDates.entries()).map(([key, value]) => [
                          key.toJSON(),
                          value.map((entry) => ({
                              date: entry.date.getTime(),
                              addedBy: entry.addedBy ? entry.addedBy.toJSON() : null,
                          })),
                      ])
                  )
                : undefined,
        };
    }

    static fromJSON<T extends GroupType>(json: any): GroupChat<T> {
        return new GroupChat<T>(
            json.name,
            json.messages.map((message: any) => Message.fromJSON<T>(message)),
            json.members.map((member: any) => Person.fromJSON(member)),
            json.createdBy,
            new Date(json.createdOn),
            json.memberAddDates
                ? new Map(
                      Object.entries(json.memberAddDates).map(([key, value]: [string, any]) => [
                          Person.fromJSON(key),
                          value.map((entry: any) => ({
                              date: new Date(entry.date),
                              addedBy: entry.addedBy ? Person.fromJSON(entry.addedBy) : null,
                          })),
                      ])
                  )
                : undefined
        );
    }

    findFirstConversationEnd() {
        if (this.messages.length < minConvserationLength) {
            return this.messages.length - 1;
        }
        let i = 0;
        for (let convos = 0; i < this.messages.length - 1 && convos < minConvserationLength; i++) {
            if (
                this.messages[i].author !== this.messages[i + 1].author &&
                !this.messages[i].flags.includes("omitted")
            ) {
                convos++;
            }
        }
        return this.findEndOfConversation(i, smallConversationLength);
    }

    findEndOfConversation(startIndex: number, maxLength: number): number {
        let at = startIndex + 1;
        while (at < this.messages.length && at - startIndex < maxLength) {
            let delta = this.messages[at].date.getTime() - this.messages[at - 1].date.getTime();
            if (delta > conversationThresholdMinutes * 60 * 1000) return at;
            at++;
        }
        return Math.min(at, this.messages.length - 1);
    }

    getAge() {
        return (
            this.messages[this.messages.length - 1].date.getTime() - this.messages[0].date.getTime()
        );
    }

    getAgeInDays(): number {
        return Math.ceil(this.getAge() / (1000 * 60 * 60 * 24));
    }

    countAuthors(): number {
        return this.members.length;
    }

    public topNAuthors(n: number): { person: Person; count: number }[] {
        const authorCounts = this.members.map((member) => {
            return {
                person: member,
                count: member.messageCount(),
            };
        });
        authorCounts.sort((a, b) => b.count - a.count);
        return authorCounts.slice(0, n);
    }

    public topNWords(n: number): Word[] {
        const top100Words =
            `the of to and a in is it you that he was for on are with as i his they be at one have this from or had by word but what some we can out other were all there when up use your how said an each she which do their time if will way about many then them write would like so these her long make thing see him two has look more day could go come did number sound no most people my over know water than call first who may down side been now find any new work part take get place made live where after back little only round man year came show every good me give our under name very through just form sentence great think say help low line differ turn cause much mean before move right boy old too same tell does set three want air well also play small end put home read hand port large spell add even land here must big high such follow act why ask men change went light kind off need house picture try us again animal point mother world near build self earth father head stand own page should country found answer school grow study still learn plant cover food sun four between state keep eye never last let thought city tree cross farm hard start might story saw far sea draw left late run don't while press close night real life few north open seem together next white children begin got walk example ease paper group always music those both mark often letter until mile river car feet care second book carry took science eat room friend began idea fish mountain stop once base hear horse cut sure watch color face wood main enough plain girl usual young ready above ever red list though feel talk bird soon body dog family direct pose leave song measure door product black short numeral class wind question happen complete ship area half rock order fire south problem piece told knew pass since top whole king space heard best hour better true . during hundred five remember step early hold west ground interest reach fast verb sing listen six table travel less morning ten simple several vowel toward war lay against pattern slow center love person money serve appear road map rain rule govern pull cold notice voice unit power town fine certain fly fall lead cry dark machine note wait plan figure star box noun field rest correct able pound done beauty drive stood contain front teach week final gave green oh quick develop ocean warm free minute strong special mind behind clear tail produce fact street inch multiply nothing course stay wheel full force blue object decide surface deep moon island foot system busy test record boat common gold possible plane stead dry wonder laugh thousand ago ran check game shape equate hot miss brought heat snow tire bring yes distant fill east paint language among grand ball yet`
                .toLowerCase()
                .split(" ");
        const wordCounts: Map<string, number> = new Map();
        for (let i = 0; i < this.messages.length; i++) {
            const message = this.messages[i].text;
            const words = message.split(" ");
            for (let j = 0; j < words.length; j++) {
                const word = words[j];
                if (wordCounts.has(word)) {
                    wordCounts.set(word, wordCounts.get(word) + 1);
                } else {
                    wordCounts.set(word, 1);
                }
            }
        }

        const processedWords: Word[] = [];
        for (let [key, value] of wordCounts) {
            processedWords.push({
                text: key,
                value,
            } as Word);
        }

        return [...processedWords.filter((word) => !top100Words.includes(word.text)).slice(0, n)];

        // const wordCountsArray: Word[] = Object.keys(wordCounts).map((word) => {
        //     return ({
        //         text: word,
        //         value: wordCounts.get(word),
        //     } as Word);
        // });
        // // console.log(wordCountsArrayFiltered.slice(0, 5));
        // var testWordsArray = [{text: "this", value: 1} as Word, {text: "is", value: 1} as Word, {text: "a", value: 1} as Word, {text: "fucking", value: 1} as Word, {text: "test", value: 1} as Word];
        // console.log("Hi");
        // console.log(testWordsArray.filter((word) => !(top100Words.includes(word.text))));
        // return wordCountsArray.slice(0, n)
        //     .filter((word) => !(top100Words.includes(word.text)));
    }

    public topSetOfWordsByN(
        wordset: Set<string>,
        n: number
    ): { person: Person; numbers: Map<string, number> }[] {
        const wordCounts = this.setOfWordsByEveryone(wordset);
        wordCounts.sort((a, b) => {
            let aTotal = 0;
            a.numbers.forEach((value) => (aTotal += value));
            let bTotal = 0;
            b.numbers.forEach((value) => (bTotal += value));
            return aTotal - bTotal; // bTotal - aTotal;
        });
        return wordCounts.slice(0, n);
    }

    public setOfWordsByEveryone(
        wordset: Set<string>
    ): { person: Person; numbers: Map<string, number> }[] {
        const wordCounts: { person: Person; numbers: Map<string, number> }[] = [];

        this.members.forEach((member) => {
            const memberIndices = member.messageIndices;
            const memberMessages = memberIndices.map((index) => this.messages[index]);

            const total = new Map<string, number>();
            memberMessages.forEach((message) => {
                message.text.split(" ").forEach((word) => {
                    if (wordset.has(word)) {
                        if (total.get(word)) {
                            total.set(word, total.get(word)! + 1);
                        } else {
                            total.set(word, 1);
                        }
                    }
                });
            });

            wordCounts.push({ person: member, numbers: total });
        });

        return wordCounts;
    }

    // public setOfWordsByAuthor(
    //     wordset: Set<string>,
    //     author: Person
    // ): { person: Person; numbers: Map<string, number> }[] {
    //     const wordCounts: Map<Person, Map<string, number>> = new Map();
    //     this.messages.forEach((message) => {
    //         if (message.author === author) {
    //             message.text.split(" ").forEach((word) => {
    //                 if (wordset.has(word)) {
    //                     if (wordCounts.get(author)) {
    //                         if (wordCounts.get(author)!.get(word)) {
    //                             wordCounts
    //                                 .get(author)!
    //                                 .set(word, wordCounts.get(author)!.get(word)! + 1);
    //                         } else {
    //                             wordCounts.get(author)!.set(word, 1);
    //                         }
    //                     } else {
    //                         wordCounts.set(author, new Map([[word, 1]]));
    //                     }
    //                 }
    //             });
    //         }
    //     });

    //     // Convert the Map to an array of objects with the structure { person: Person; numbers: Map<string, number> }
    //     const result: { person: Person; numbers: Map<string, number> }[] = [];
    //     wordCounts.forEach((value, key) => {
    //         result.push({ person: key, numbers: value });
    //     });

    //     return result;
    // }
}
