import { Component, OnInit, Input} from '@angular/core';

import * as ListModule from '../section/list';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent implements OnInit {

  section: ListModule.List;

  @Input() 
  set languageIndex(index: number) {
    this.section.languageIndex = index;
  }

  constructor() {
    this.section = new ListModule.List([
      "Dodatkowe informacje",
      "Additional information"],[
        new ListModule.Node(["Zainteresowania:","Hobbies:"],[
          new ListModule.Node([
            "Pisanie opowiadań fantasy i science fiction",
            "Writing fantasy and science fiction stories"]),
          new ListModule.Node([
            "Granie w klasyczne gry RPG w stylu Pen&Paper",
            "Playing Pen&Paper Role Playing Games"]),
          new ListModule.Node([
            "Gra na instrumentach muzycznych (gitara i keyboard)",
            "Playing musical instruments (guitar and keyboard)"])
        ]),
        new ListModule.Node(["Gotowość do przeprowadzki","Willing to relocate"]),
        new ListModule.Node(["Gotowość do podróży","Willing to relocate"])
      ]); }

  ngOnInit() {
  }

}
