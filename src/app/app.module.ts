import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { PersonalDataProtectionClauseComponent } from './personal-data-protection-clause/personal-data-protection-clause.component';
import { LanguageChageComponent } from './language-chage/language-chage.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    CareerAimsComponent,
    EducationComponent,
    KeySkillsComponent,
    AdditionalInfoComponent,
    PersonalDataProtectionClauseComponent,
    LanguageChageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'zbigniew-zambrzycki-cv'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
