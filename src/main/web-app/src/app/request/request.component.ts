import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogConfig} from '@angular/material';

import {GenericDialogComponent} from '../generic-dialog/generic-dialog.component';
import {DisplayDataDialogComponent} from '../display-data-dialog/display-data-dialog.component';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';


export interface RequestData {
  reqDesc: string;
  status: string;
}


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  comment: string;
  displayedColumns: string[] = ['reqDesc', 'status', 'action'];
  dataSource: MatTableDataSource<RequestData>;

  /** Constants used to fill up our data base. */
 reqData: RequestData[];

  testinglog: string;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 users
    this.reqData = [
              {reqDesc: 'Seat change request', status: 'open'},
              {reqDesc: 'PC not working.', status: 'inactivated'},
              {reqDesc: 'Project discussion.', status: 'inactivated'}
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.reqData);
//    this.dataSource = this.reqData;
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  onSubmit(request: RequestData, action: string) {
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      height: '250px',
      width: '600px',
    });
    this.testinglog = "1";
    dialogRef.afterClosed().subscribe((result) => {
        dialogRef.componentInstance.onAdd.unsubscribe();
        this.testinglog = result;
        if (result) {
        this.testinglog = result;
        request.status = action;
        }
    });
  }

  onCancel(request: RequestData) {
    this.onSubmit(request, "inactivated");
  }

  viewReqDescription(row) {
    const dialogRef = this.dialog.open(DisplayDataDialogComponent, {
      data: {value: row.reqDesc}
    });
  }

  onAddRequest() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = '250px';
    dialogConfig.width = '600px';
    const dialogRef = this.dialog.open(RequestDialogComponent, dialogConfig);

    dialogRef.componentInstance.onAdd.subscribe((data) => {
        this.comment = data;
     });

    dialogRef.afterClosed().subscribe((result) => {
      dialogRef.componentInstance.onAdd.unsubscribe();
      console.log(result);
      if(result){
        this.testinglog = this.comment;
        this.reqData.push({reqDesc: this.comment, status: 'open'});
//        this.dataSource = new MatTableDataSource(this.reqData);
        this.dataSource.data = this.reqData;

      }
    });
  }

}
