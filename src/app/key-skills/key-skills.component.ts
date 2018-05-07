import { Component, OnInit, Input} from '@angular/core';

import * as ListModule from '../section/list';
import { expandList } from '../section/animation';

@Component({
  selector: 'app-key-skills',
  templateUrl: './key-skills.component.html',
  styleUrls: ['./key-skills.component.scss'],
  animations: [ expandList ]
})
export class KeySkillsComponent implements OnInit {

  state: string = "none";

  section: ListModule.List;

  @Input() 
  set languageIndex(index: number) {
    this.section.languageIndex = index;
  }

  constructor() { 
    this.section = new ListModule.List(["Umiejętności","Key Skills"],[
    new ListModule.Node(["Informatyka:","Computer skills:"],[
      new ListModule.Node(["C# (podstawy)","C# (basic)"]),
      new ListModule.Node(["Angular 5 (podstawy)","Angular 5 (basic)"],[
        new ListModule.Node([
          "Link do repozytorium na GitHub",
          "Link to the GitHub repository"],[
            new ListModule.Node([
              "https://github.com/zambrzycki-zbigniew/zbigniew-zambrzycki-cv-app",
              "https://github.com/zambrzycki-zbigniew/zbigniew-zambrzycki-cv-app"])
          ])]),
      new ListModule.Node(["TypeScript (podstawy)","TypeScript (basic)"]),
      new ListModule.Node(["JavaScript (podstawy)","JavaScript (basic)"]),
      new ListModule.Node(["Git (początkujący)","Git (elementary)"]),
      new ListModule.Node(["SQL (początkujący)","SQL (elementary)"])
    ]),
    new ListModule.Node(["Umiejętności ogólne:","General skills:"],[
      new ListModule.Node(["Chęć do nauki i samorozwoju","Willing to learn"]),
      new ListModule.Node(["Szybkie przyswajanie wiedzy","Fast learner"]),
      new ListModule.Node(["Umiejętność pracy w grupie","Teamwork"]),
      new ListModule.Node(["Analityczne myślenie","Analytical thinking"]),
      new ListModule.Node(["Komunikatywność","Communication"]),
      new ListModule.Node(["Duża motywacja do pracy","Motivated"])
    ]),
    new ListModule.Node(["Języki:","Languages:"],[
      new ListModule.Node(["Angielski (zaawansowany)","English (advanced)"]),
      new ListModule.Node(["Polski (rodzimy)","Polish (native)"])
    ])
  ]);}

  ngOnInit() {
    
  }

  stateChange() {
    this.state = this.state === 'none' ? 'block' : 'none';
  }

  stateReset() {
    this.state = 'none';
  }
  
}
