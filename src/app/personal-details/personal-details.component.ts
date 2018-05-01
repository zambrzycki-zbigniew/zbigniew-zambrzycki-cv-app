import { Component, OnInit } from '@angular/core';
import { Details, Address, Mobile, Name, Birthdate } from './details';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  details: Details;

  constructor() { }

  ngOnInit() {
    this.details = new Details(
      "zambrzycki.zbigniew@gmail.com",
      new Name("Zbigniew","Zambrzycki"),
      new Birthdate(new Date(1991,11,17)),
      new Address(["Polska","Poland"],"Mała Nieszawka","87-103, Toruń 5", "Bydgoska", "38",""),
      new Mobile(507939477,"+48"));
  }

}
