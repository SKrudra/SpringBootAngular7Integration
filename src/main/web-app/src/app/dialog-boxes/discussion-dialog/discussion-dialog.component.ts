import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { loginDetailRoleMap } from '../../constants';

@Component({
  selector: 'app-discussion-dialog',
  templateUrl: './discussion-dialog.component.html',
  styleUrls: ['./discussion-dialog.component.css']
})
export class DiscussionDialogComponent implements OnInit {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  form: FormGroup;
  requestId: number;
  empRole: string;
  comments: Comment[] = [];

  constructor(
    public commentService: CommentService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.requestId = data.requestId;
    this.empRole = data.empRole;
  }

  ngOnInit() {
    this.form = this.fb.group({
      'message': new FormControl('')
    });

    this.commentService.getCommentsForRequest(this.requestId).subscribe(result => {
      if (result) {
        this.comments = result;
        this.scrollToBottom();
      }
    });
  }

  scrollToBottom(): void {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

  onSubmit(): void {
    const message = this.form.get('message').value;
    this.commentService.addComment(this.requestId, message, loginDetailRoleMap.get(this.empRole)).subscribe();
    const messageComment = new Comment();
    messageComment.requestId = this.requestId;
    messageComment.content = message;
    messageComment.role = loginDetailRoleMap.get(this.empRole);
    this.comments.push(messageComment);
    this.scrollToBottom();
  }


}
