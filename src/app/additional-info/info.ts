export class AdditionalInfo {
    private sectionHeader: string[];
    private languageIndex: number;
    constructor() {
        this.sectionHeader =[
            "Dodatkowe informacje",
            "Additional information"
        ]
        this.languageIndex = 0;
    }

    public getHeader() {
        return this.sectionHeader[this.languageIndex];
    }
    public getLanguage() {
        return this.languageIndex;
    }

    public changeLanguage() {
        this.languageIndex=(this.languageIndex-1)^2;
    }
}