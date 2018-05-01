import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { CareerAimsComponent } from './career-aims/career-aims.component';
import { EducationComponent } from './education/education.component';
import { KeySkillsComponent } from './key-skills/key-skills.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
