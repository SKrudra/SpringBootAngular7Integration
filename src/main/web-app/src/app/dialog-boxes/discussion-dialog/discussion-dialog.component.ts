import { Component, OnInit, Inject } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-discussion-dialog',
  templateUrl: './discussion-dialog.component.html',
  styleUrls: ['./discussion-dialog.component.css']
})
export class DiscussionDialogComponent implements OnInit {

  form: FormGroup;
  requestId: number;
  comments: Comment[] = [];

  constructor(
    public commentService: CommentService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.requestId = data.requestId;
  }

  ngOnInit() {
    this.form = this.fb.group({
      'message': new FormControl('')
    });

    this.commentService.getCommentsForRequest(this.requestId).subscribe(result => {
      if (result) {
        this.comments = result;
      }
    });
  }

}
