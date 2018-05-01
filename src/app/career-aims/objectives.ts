export class Objectives {
    private sectionHeader: string[];
    private careerObjectives: string[];
    private languageIndex: number;
    constructor(objectivesPl: string, objectivesEng: string) {
        this.careerObjectives = [
            objectivesPl,
            objectivesEng
        ];
        this.sectionHeader = ["Cele zawodowe","Career objectives"];
        this.languageIndex = 0;
    }

    public getHeader() {
        return this.sectionHeader[this.languageIndex];
    }

    public getObjectives() {
        return this.careerObjectives[this.languageIndex];
    }
    public changeLanguage() {
        this.languageIndex=(this.languageIndex-1)^2;
    }
}
