import { Component, OnInit, Input } from '@angular/core';

import * as TableModule from '../section/table';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {

  section: TableModule.Table;

  @Input() 
  set languageIndex(index: number) {
    this.section.languageIndex = index;
  }

  constructor() {
    this.section = new TableModule.Table(
      ["Zbigniew Zambrzycki","Zbigniew Zambrzycki"],
      [new TableModule.Row(
        ["E-mail: ","E-mail: "],
        [
          "zambrzycki.zbigniew@gmail.com"
          ,"zambrzycki.zbigniew@gmail.com"
        ]),
       new TableModule.Row(
        ["Adres zamieszkania: ","Address: "],
        [
          "Polska, Mała Nieszawka 87-103, Bydgoska 38",
          "Poland, Mała Nieszawka 87-103, Bydgoska 38"
        ]),
       new TableModule.Row(
        ["Data urodzenia: ","Date of birth: "],
        [
          "17.12.1991",
          "17.12.1991"
        ]),
       new TableModule.Row(
        ["Numer telefonu: ","Mobile number: "],
        [
          "+48 507 939 477",
          "+48 507 939 477"
        ])
      ]); }

  ngOnInit() {
  }
}
