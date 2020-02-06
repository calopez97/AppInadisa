import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalastosComponent } from './balastos.component';

describe('BalastosComponent', () => {
  let component: BalastosComponent;
  let fixture: ComponentFixture<BalastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
