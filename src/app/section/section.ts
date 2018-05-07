
export abstract class Section {

    constructor(
        private sectionHeader: string[],
        public languageIndex: number = 0) {  }

    public getHeader() {
        return this.sectionHeader[this.languageIndex];
    }

    public getLanguage() {
        return this.languageIndex;
    }
}