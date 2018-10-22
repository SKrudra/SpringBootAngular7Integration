import { Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { RequestData } from '../../models/request-data';

@Component({
  selector: 'app-display-data-dialog',
  templateUrl: './display-data-dialog.component.html',
  styleUrls: ['./display-data-dialog.component.css']
})
export class DisplayDataDialogComponent implements OnInit {

  theRequest: RequestData;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.theRequest = data.theRequest;
   }

  ngOnInit() {
  }

}
