import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondensadoresComponent } from './condensadores.component';

describe('CondensadoresComponent', () => {
  let component: CondensadoresComponent;
  let fixture: ComponentFixture<CondensadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondensadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondensadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
