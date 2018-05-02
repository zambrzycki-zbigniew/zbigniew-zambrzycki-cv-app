import { Component, OnInit } from '@angular/core';

import { Education, Course } from './education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education: Education;

  constructor() { }

  ngOnInit() {
    this.education = new Education ([
      new Course(2007,2010,[
        "Liceum Ogólnokształcące im. Mikołaja Kopernika nr. 1","High school"],
        ["Mat-fiz-inf","Math, physics and informatics"]),
      new Course(2010,2012,
        ["Uniwersytet im. Mikołaja Kopernika w Toruniu","'Nicolai Copernicus' College in Toruń"],
        ["Informatyka Stosowana","Applied Computer Science"]),
      new Course(2018,0,
        ["?PL?","?ENG?"],
        ["?PL?","?ENG?"])]);
  }

}
