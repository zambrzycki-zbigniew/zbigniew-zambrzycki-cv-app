import { Component, OnInit } from '@angular/core';

import { Objectives } from './objectives';

@Component({
  selector: 'app-career-aims',
  templateUrl: './career-aims.component.html',
  styleUrls: ['./career-aims.component.scss']
})
export class CareerAimsComponent implements OnInit {

  objectives: Objectives;

  constructor() { }

  ngOnInit() {
    this.objectives = new Objectives(
                      "Moje cele zawodowe to...",
                      "My careers objectives are...");
  }

}
