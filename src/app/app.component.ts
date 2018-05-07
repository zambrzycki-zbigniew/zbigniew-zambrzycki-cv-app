import { Component, OnInit, Input, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { AuthService } from './shared/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { fadeInOut, Animator } from './section/animation';

@Component({
  selector: 'app-root',
  host: {
      '(document:click)': 'this.animator.handleClick($event)',
  },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeInOut ]
})

export class AppComponent implements OnInit {

  public animator: Animator
  user = null;

  constructor(
    private auth: AuthService,
    public db: AngularFireDatabase) { }

    

loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

ngOnInit() {
    this.animator = new Animator();
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
  }


}