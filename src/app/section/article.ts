import { Section } from './section';

export class Article extends Section {
    constructor(
        header: string[],
        private text: string[]){
            super(header)
        }
    public getText() {
        return this.text[this.languageIndex];
    }
}