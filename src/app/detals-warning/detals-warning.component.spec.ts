import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalsWarningComponent } from './detals-warning.component';

describe('DetalsWarningComponent', () => {
  let component: DetalsWarningComponent;
  let fixture: ComponentFixture<DetalsWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalsWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalsWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
