import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcwaComponent } from './formcwa.component';

describe('FormcwaComponent', () => {
  let component: FormcwaComponent;
  let fixture: ComponentFixture<FormcwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
