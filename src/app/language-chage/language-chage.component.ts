import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { animateButton } from '../section/animation';


@Component({
  selector: 'app-language-chage',
  host: {
      '(document:click)': 'handleClick($event)',
  },
  templateUrl: './language-chage.component.html',
  styleUrls: ['./language-chage.component.scss'],
  animations: [ animateButton ]
})

export class LanguageChageComponent implements OnInit {

  topOffset: string = '34px';
  leftOffset: string = '34px';
  change: boolean = false;
  language: string;

  constructor(public elementRef: ElementRef) { }

  ngOnInit() {
    this.topOffset = (34+window.pageYOffset)+"px";
    this.leftOffset = (window.innerWidth/20-34)+"px";
    this.language = "pl";
  }

    handleClick(event){
        var clickedComponent = event.target;
        var inside = false;
        do {
                if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if(inside) if (this.language!="pl") this.language="pl"; else this.language="eng";
    }

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
      this.topOffset = (34+window.pageYOffset)+"px";
      this.change = !this.change;
    }

    @HostListener('window:resize', ['$event'])
    checkResize() {
      this.leftOffset = (window.innerWidth/20-34)+"px";
      this.change = !this.change;
    }
}
