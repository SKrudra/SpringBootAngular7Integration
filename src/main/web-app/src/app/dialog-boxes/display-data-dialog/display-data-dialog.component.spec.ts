import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDataDialogComponent } from './display-data-dialog.component';

describe('DisplayDataDialogComponent', () => {
  let component: DisplayDataDialogComponent;
  let fixture: ComponentFixture<DisplayDataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
