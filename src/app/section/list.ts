import { Section } from './section';

export class List extends Section {
    constructor(
        header: string[],
        private list: Node[]){
            super(header)
        }
    public getList() {
        return this.list;
    }
}

export class Node {
    private children: Node[]
    constructor(
        private text: string[],
        childNodes?: Node[]) {
            if (childNodes!=null) this.children=childNodes;
            else this.children=null;
        }

    public getText(languageIndex: number) {
        return this.text[languageIndex];
    }

    public getChildren() {
        return this.children;
    }

    public isParent() {
        if (this.children!=null) return true;
        else return false;
    }
}