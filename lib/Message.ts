export default class Message<T extends MessageType> {
    public date: Date;
    public author: string;
    public text: string;
    public flags: string[];

    public constructor(date: Date, author: string, text: string, flags: string[]) {
        this.date = date;
        this.author = author;
        this.text = text;
        this.flags = flags;
    }

    public toJSON() {
        return {
            ...this,
            date: this.date.getTime(),
        };
    }

    static fromJSON<T extends MessageType>(json: any): Message<T> {
        return new Message<T>(new Date(json.date), json.author, json.text, json.flags);
    }
}
