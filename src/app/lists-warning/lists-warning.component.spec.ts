import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsWarningComponent } from './lists-warning.component';

describe('ListsWarningComponent', () => {
  let component: ListsWarningComponent;
  let fixture: ComponentFixture<ListsWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
