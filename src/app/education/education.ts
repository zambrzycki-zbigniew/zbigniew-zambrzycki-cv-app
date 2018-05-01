export class Education {
    private sectionHeader: string[];
    private courses: Course[];
    private languageIndex: number;
    constructor(coursesPlEng: Course[]) {
        this.courses = coursesPlEng;
        this.sectionHeader = ["Edukacja","Education"];
        this.languageIndex = 0;
    }

    public getHeader() {
        return this.sectionHeader[this.languageIndex];
    }

    public getCourses() {
        return this.courses;
    }

    public addCourse(course: Course) {
        this.courses.push(course);
    }

    public getLanguage() {
        return this.languageIndex;
    }

    public changeLanguage() {
        this.languageIndex=(this.languageIndex-1)^2;
    }
}

export class Course {
    private startYear: number;
    private finishYear: number;
    private schoolName: string[];
    private className: string[];
    constructor(start: number, finish: number, school: string[], classN: string[]) {
        this.startYear = start;
        this.finishYear = finish;
        this.schoolName = school;
        this.className = classN;
    }

    public getYears() {
        return this.startYear+" - "+this.finishYear;
    }

    public getSchool(index: number) {
        return this.schoolName[index];
    }

    public getClass(index: number) {
        return this.className[index];
    }
}
