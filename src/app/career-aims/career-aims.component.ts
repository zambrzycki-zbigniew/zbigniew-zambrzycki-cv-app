import { Component, OnInit, Input} from '@angular/core';

import * as ArticleModule from '../section/article';

@Component({
  selector: 'app-career-aims',
  templateUrl: './career-aims.component.html',
  styleUrls: ['./career-aims.component.scss']
})
export class CareerAimsComponent implements OnInit {

  section: ArticleModule.Article;

  @Input() 
  set languageIndex(index: number) {
    this.section.languageIndex = index;
  }

  constructor() {
    this.section = new ArticleModule.Article(["Cele zawodowe","Career objectives"],[
      "Poszukuję sposobności by rozwijać moje umiejętności techniczne pracując w profesjonalnym środowisku i zostania w dłuższej perspektywie inżynierem oprogramowania.",
      "Seeking for an opportunity to develop my technical skills by working for a professional company and become a software engineer in the longer perspective."
    ]);
   }

  ngOnInit() {
  }

}
