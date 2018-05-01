export class Skills {
    private sectionHeader: string[];
    private skillsets: Skillset[];
    private languageIndex: number;
    constructor(skillsPlEng: Skill[][], skillsetNames: string[][]) {
        this.skillsets = new Array();
        for (let index = 0; index < skillsPlEng.length; index++)
            this.skillsets.push(new Skillset(skillsPlEng[index],skillsetNames[index]));
        this.sectionHeader = ["Umiejętności","Key Skills"];
        this.languageIndex = 0;
    }

    public getHeader() {
        return this.sectionHeader[this.languageIndex];
    }

    public getSkillsets() {
        return this.skillsets;
    }

    public getSkillset(index: number) {
        return this.skillsets[index];
    }

    public getLanguage() {
        return this.languageIndex;
    }

    public changeLanguage() {
        this.languageIndex=(this.languageIndex-1)^2;
    }
}

export class Skillset {
    private skills: Skill[];
    private skillsetName: string[];
    constructor(skillsList: Skill[], skillset: string[]) {
        this.skills = skillsList;
        this.skillsetName = skillset;
    }

    public getName(index: number) {
        return this.skillsetName[index];
    }

    public getSkills() {
        return this.skills;
    }
}

export class Skill {
    private skillName: string[];
    private skillLevel: string[];
    private skillProven: boolean;
    private skillProof: string;
    private skillProofAlias: string[];

    constructor(name: string[], level: string[], proof?: string, proofAlias?: string[]) {
        this.skillName = name;
        this.skillLevel = level;
        this.skillProof = proof || "";
        if (this.skillProof!="") {
            this.skillProven=true;
            this.skillProofAlias=proofAlias;
        }
        else {
            this.skillProven=false;
            this.skillProofAlias=["",""];
        }
    }

    public getSkillName(index: number) {
        return this.skillName[index];
    }

    public getSkillLevel(index: number) {
        return this.skillLevel[index];
    }

    public isSkillProven() {
        return this.skillProven;
    }

    public getSkillProof() {
        return this.skillProof;
    }

    public getSkillProofAlias(index: number) {
        return this.skillProofAlias[index];
    }


}
