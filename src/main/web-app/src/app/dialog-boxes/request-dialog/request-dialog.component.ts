import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { MatInput, MatCheckbox, MatFormField } from '@angular/material';
import { RequestService } from '../../services/request.service';
import { RequestData } from '../../models/request-data';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.css']
})
export class RequestDialogComponent implements OnInit {

  form: FormGroup;
  myEmpId: number;    
  defaultReasons = [];
  formIsInvalid: boolean;

  constructor(
    private dialogRef: MatDialogRef<RequestDialogComponent>,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    public requestService: RequestService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.formIsInvalid = true;
    this.myEmpId = data.empId;
   }

  ngOnInit() {
    this.requestService.getReasons().subscribe(res => {  
        this.defaultReasons = res;
        const reasonControls = this.defaultReasons.map(c => new FormControl(false));
        this.form = this.fb.group({
          'reasons': new FormArray(reasonControls),
          'otherReason': new FormControl('', Validators.required),
          'comment': new FormControl('', Validators.required)
        });        
    });

  }

  onSubmit(): void {
    // generate explanation
    let explanation = this.form.get('comment').value;
    if(explanation) {
        explanation += ' '+ this.form.get('otherReason').value;
        // get selected reason IDs from checkboxes
        this.formIsInvalid = false;
        const selectedReasonIds = this.form.value.reasons
          .map((v, i) => v ? this.defaultReasons[i].id : null)
          .filter(v => v !== null);
    
        this.requestService.addRequest(this.myEmpId, explanation, selectedReasonIds).subscribe();   
        this.dialogRef.close("true"); 
     } else this.snackbar.open('Explanation is required', undefined, { duration: 3000, });
  }

}
