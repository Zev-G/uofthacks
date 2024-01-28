import Person from "./Person";

export default class Message<T extends MessageType> {
    public readonly date: Date;
    public readonly author: Person;
    public readonly text: string;
    public readonly flags: string[];

    public constructor(date: Date, author: Person, text: string, flags: string[]) {
        this.date = date;
        this.author = author;
        this.text = text;
        this.flags = flags;
    }

    public toJSON() {
        return {
            ...this,
            person: this.author.toJSON(),
            date: this.date.getTime(),
        };
    }

    static fromJSON<T extends MessageType>(json: any): Message<T> {
        return new Message<T>(new Date(json.date), json.author, json.text, json.flags);
    }
}
