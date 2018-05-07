import { Component, OnInit, Input} from '@angular/core';

import * as ArticleModule from '../section/article';

@Component({
  selector: 'app-personal-data-protection-clause',
  templateUrl: './personal-data-protection-clause.component.html',
  styleUrls: ['./personal-data-protection-clause.component.scss'],
})
export class PersonalDataProtectionClauseComponent implements OnInit {

    section: ArticleModule.Article;

    @Input() 
    set languageIndex(index: number) {
      this.section.languageIndex = index;
    }
  
    constructor() {
      this.section = new ArticleModule.Article(["",""],[
        "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. 2016 r. poz. 922).",
        "I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the Personal Data Protection Act as of 29 August 1997, consolidated text: Journal of Laws 2016, item 922 as amended."
      ]); }
  
    ngOnInit() {
    }

}
