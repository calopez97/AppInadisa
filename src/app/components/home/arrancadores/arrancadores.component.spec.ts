import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrancadoresComponent } from './arrancadores.component';

describe('ArrancadoresComponent', () => {
  let component: ArrancadoresComponent;
  let fixture: ComponentFixture<ArrancadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrancadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrancadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
