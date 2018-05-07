import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

@Component({
  selector: 'app-language-chage',
  host: {
      '(document:click)': 'handleClick($event)',
  },
  templateUrl: './language-chage.component.html',
  styleUrls: ['./language-chage.component.scss'],
  animations: [
    trigger('sizeAnimation', [
      state("*", style({
        top: '{{topOffset}}',
        left: '{{leftOffset}}',
      }), {params: {
            topOffset: '30%',
            leftOffset: '50%'}}),
      transition('* => *', animate('600ms 200ms ease-in-out'))
    ]),
    trigger('changeAnimation', [
      state("pl", style({
        backgroundImage: `url('/assets/images/pl.png')`
      })),
      state("eng", style({
        backgroundImage: `url('/assets/images/eng.png')`
      })),
      transition('* => *', animate('600ms'))
    ])
  ]
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
    console.log(window.location.pathname);
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
        console.log(window.location.pathname);
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
