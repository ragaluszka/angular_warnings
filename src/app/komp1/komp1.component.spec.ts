import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Komp1Component } from './komp1.component';

describe('Komp1Component', () => {
  let component: Komp1Component;
  let fixture: ComponentFixture<Komp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Komp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Komp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
