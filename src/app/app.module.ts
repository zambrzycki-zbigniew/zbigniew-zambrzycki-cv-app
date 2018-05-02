import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { CareerAimsComponent } from './career-aims/career-aims.component';
import { EducationComponent } from './education/education.component';
import { KeySkillsComponent } from './key-skills/key-skills.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from './shared/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    CareerAimsComponent,
    EducationComponent,
    KeySkillsComponent,
    AdditionalInfoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'zbigniew-zambrzycki-cv'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
