import { 
    trigger, state,
    style, animate,
    transition, AnimationEvent, keyframes } from '@angular/animations';
import { Injectable } from '@angular/core';

export const fadeInOut = trigger('visibility',[
        state('visible', style({opacity: 1})),
        state('invisible', style({opacity: 0})),
        transition('visible => invisible', animate('300ms')),
        transition('invisible => visible', animate('300ms'))        
      ])

export const expandList = trigger('mouseEvent',[
        state('none', style({
            opacity: 0,
            height: '0px'
        })),
        state('block', style({
            opacity: 1,
            height: '20px'
        })),
        transition('none => block', animate('500ms ease-in-out', keyframes([
            style({opacity: 0, height: '0px', offset: 0}),
            style({opacity: 0, height: '20px', offset: 0.5}),
            style({opacity: 0, height: '30px', offset: 0.75}),
            style({opacity: 1, height: '20px', offset: 1})
        ]))),
        transition('block => none', animate('500ms ease-in-out', keyframes([
            style({opacity: 1, height: '20px', offset: 0}),
            style({opacity: 1, height: '30px', offset: 0.5}),
            style({opacity: 1, height: '20px', offset: 0.75}),
            style({opacity: 0, height: '0px', offset: 1})
        ])))        
      ])

    export const animateButton = [
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

@Injectable()

export class Animator {
    
    constructor(
        public visibility: string = 'visible',
        public languageIndex: number = 0){
        }
  
    handleClick(event){
              var clickedComponent = event.target;
              var inside = false;
              do {
                  if (clickedComponent.id === "changeLanguageButton") {
                      inside = true;
                  }
                  clickedComponent = clickedComponent.parentNode;
              } while (clickedComponent);
              if(inside) this.toggleVisibility();
          }

    public toggleVisibility() {
              this.visibility = this.visibility === 'visible' ? 'invisible' : 'visible';
            }
            
    public changeLanguage(event: AnimationEvent) {
                if (event.toState=="invisible") {
                    this.languageIndex = this.languageIndex === 0 ? 1 : 0;
                    this.toggleVisibility();
                }
            }
}