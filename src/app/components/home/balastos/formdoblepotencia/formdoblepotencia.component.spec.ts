import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdoblepotenciaComponent } from './formdoblepotencia.component';

describe('FormdoblepotenciaComponent', () => {
  let component: FormdoblepotenciaComponent;
  let fixture: ComponentFixture<FormdoblepotenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormdoblepotenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdoblepotenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
