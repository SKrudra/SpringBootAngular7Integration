import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.css']
})
export class GenericDialogComponent implements OnInit {

  
  constructor(public dialogRef : MatDialogRef<GenericDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  comment = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.comment.hasError('required') ? 'You must enter a value':'';
  }

  onClose(): void {
    this.dialogRef.close(this.comment.value);
}
  // onSubmit():string{
  //   this.dialogRef.close();
  //   this.data = this.comment.value;
  //   console.log(this.data);
  //   return this.comment.value;
  // }
}
