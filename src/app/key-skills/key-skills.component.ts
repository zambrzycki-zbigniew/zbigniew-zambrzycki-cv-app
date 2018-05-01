import { Component, OnInit } from '@angular/core';

import { Skills, Skill } from './skills';

@Component({
  selector: 'app-key-skills',
  templateUrl: './key-skills.component.html',
  styleUrls: ['./key-skills.component.scss']
})
export class KeySkillsComponent implements OnInit {

  allSkills: Skills;

  constructor() { }

  ngOnInit() {
    this.allSkills = new Skills(
      [
        [new Skill(["1pl","1eng"],["1pl","1eng"]),new Skill(["2pl","2eng"],["2pl","2eng"])],
        [new Skill(["3pl","3eng"],["3pl","3eng"],"proof",["dowód","proof"]),new Skill(["4pl","4eng"],["4pl","4eng"])],
      ],
      [
        ["umki1","skills1"],
        ["umki2","skills2"]
      ]
    );
  }

}
