import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormthreetapComponent } from './formthreetap.component';

describe('FormthreetapComponent', () => {
  let component: FormthreetapComponent;
  let fixture: ComponentFixture<FormthreetapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormthreetapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormthreetapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
