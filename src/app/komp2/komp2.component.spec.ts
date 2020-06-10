import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Komp2Component } from './komp2.component';

describe('Komp2Component', () => {
  let component: Komp2Component;
  let fixture: ComponentFixture<Komp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Komp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Komp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
