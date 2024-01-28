export default class Person {
    public readonly name: string;
    public readonly messageIndices: number[];

    constructor(name: string, messageIndices: number[]) {
        this.name = name;
        this.messageIndices = messageIndices;
    }

    public messageCount(): number {
        return this.messageIndices.length;
    }

    public toString(): string {
        return this.name;
    }

    public toJSON() {
        return {
            name: this.name,
            messageIndices: this.messageIndices,
        };
    }

    public static fromJSON(json: any): Person {
        return new Person(json.name, json.messageIndices);
    }
}
