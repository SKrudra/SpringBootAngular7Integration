import { Component, OnInit, Inject } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-discussion-dialog',
  templateUrl: './discussion-dialog.component.html',
  styleUrls: ['./discussion-dialog.component.css']
})
export class DiscussionDialogComponent implements OnInit {

  requestId: number;
  comments: Comment[] = [];

  constructor(
    public commentService: CommentService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.requestId = data.requestId;
  }

  ngOnInit() {
    this.commentService.getCommentsForRequest(this.requestId).subscribe(result =>{
      if (result) {
        this.comments = result;
      }
    });
  }

}
