import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageChageComponent } from './language-chage.component';

describe('LanguageChageComponent', () => {
  let component: LanguageChageComponent;
  let fixture: ComponentFixture<LanguageChageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageChageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageChageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
