import { Component, OnInit,Inject,EventEmitter,Output } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.css']
})
export class GenericDialogComponent implements OnInit {

  @Output('onAdd')
  onAdd = new EventEmitter<any>();
  constructor(public dialogRef : MatDialogRef<GenericDialogComponent>) { }

  ngOnInit() {
  }

  comment = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.comment.hasError('required') ? 'You must enter a value':'';
  }

  // onClose(): void {
  //   this.dialogRef.close('done');
  // }

  onSubmit():void{
    this.dialogRef.close('true');
    this.onAdd.emit(this.comment.value);
  }
}
