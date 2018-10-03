import { Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-display-data-dialog',
  templateUrl: './display-data-dialog.component.html',
  styleUrls: ['./display-data-dialog.component.css']
})
export class DisplayDataDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

}
