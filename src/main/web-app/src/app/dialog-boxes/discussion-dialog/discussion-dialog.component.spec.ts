import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionDialogComponent } from './discussion-dialog.component';

describe('DiscussionDialogComponent', () => {
  let component: DiscussionDialogComponent;
  let fixture: ComponentFixture<DiscussionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
