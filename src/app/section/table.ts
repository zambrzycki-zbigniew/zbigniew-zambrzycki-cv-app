import { Section } from './section';

export class Table extends Section {
    constructor(
        header: string[],
        private rows: Row[]){
            super(header)
        }
    public getTable() {
        return this.rows;
    }
}

export class Row {
    constructor(
        private description: string[],
        private text: string[]){}

    public getDescription(languageIndex: number) {
        return this.description[languageIndex];
    }

    public getText(languageIndex: number) {
        return this.text[languageIndex];
    }
}