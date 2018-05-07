import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataProtectionClauseComponent } from './personal-data-protection-clause.component';

describe('PersonalDataProtectionClauseComponent', () => {
  let component: PersonalDataProtectionClauseComponent;
  let fixture: ComponentFixture<PersonalDataProtectionClauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDataProtectionClauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataProtectionClauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
