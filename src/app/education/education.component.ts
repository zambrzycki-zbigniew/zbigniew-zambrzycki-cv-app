import { Component, OnInit, Input} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import * as ListModule from '../section/list';
import { expandList } from '../section/animation';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [ expandList ]
})
export class EducationComponent implements OnInit {

  state: string = "none";
  section: ListModule.List;

  @Input() 
  set languageIndex(index: number) {
    this.section.languageIndex = index;
  }

  constructor() { 
    this.section = new ListModule.List(["Edukacja","Education"],[
      new ListModule.Node(["2010-2013","2010-2013"],[
        new ListModule.Node([
          "Uniwersytet im. Mikołaja Kopernika w Toruniu",
          "Nicolaus Copernicus College in Toruń"]),
        new ListModule.Node([
          "Informatyka Stosowana",
          "Applied Informatics"],[
          new ListModule.Node([
            "Studia przerwane po trzecim semestrze z powodów rodzinnych.",
            "Studies interrupted after third semester due to family reasons."])])
      ]),
      new ListModule.Node(["2007-2010","2007-2010"],[
        new ListModule.Node([
          "Liceum Ogólnokształcące im. Mikołaja Kopernika nr. 1 w Toruniu",
          "Liceum Ogólnokształcące im. Mikołaja Kopernika nr. 1 in Toruń"]),
          new ListModule.Node([
            "Klasa informatyczna",
            "Computer science class"])
      ])
    ]);
  }

  ngOnInit() {
  }

  stateChange(param?: string) {
    if (param==null) this.state = this.state === "none" ? "block" : "none";
    else this.state = param;
  }

}

