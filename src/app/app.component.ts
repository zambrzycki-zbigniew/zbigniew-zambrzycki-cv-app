import { Component, OnInit } from '@angular/core';

import { AuthService } from './shared/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  user = null;
  constructor(
    private auth: AuthService,
    public db: AngularFireDatabase) { }

loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
  }
}