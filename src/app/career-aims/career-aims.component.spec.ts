import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerAimsComponent } from './career-aims.component';

describe('CareerAimsComponent', () => {
  let component: CareerAimsComponent;
  let fixture: ComponentFixture<CareerAimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerAimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerAimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
