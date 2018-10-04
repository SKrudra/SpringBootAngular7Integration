import { Component, OnInit,Inject,EventEmitter,Output } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.css']
})
export class RequestDialogComponent implements OnInit {

  form: FormGroup;
  request:string;
  @Output('onAdd')
  onAdd = new EventEmitter<any>();
  constructor(
    private dialogRef : MatDialogRef<RequestDialogComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      
    });
  }

  comment = new FormControl('', [Validators.required]);
  

  getErrorMessage() {
    return this.comment.hasError('required') ? 'You must enter a value':'';
  }

  onSubmit():void{
    this.dialogRef.close('true');
    this.onAdd.emit(this.comment.value);
  }

}
