import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';

import{GenericDialogComponent} from '../generic-dialog/generic-dialog.component';
import{DisplayDataDialogComponent} from '../display-data-dialog/display-data-dialog.component';

import { RequestService } from '../services/request.service';
import { RequestData } from '../models/request-data';
import { requestStatusMap } from '../constants';
@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  reqData : RequestData[];
  comment:string;
  displayedColumns: string[] = ['id', 'reqDesc', 'empId', 'status','action'];
  dataSource: MatTableDataSource<RequestData>;
  requestStatusMap=requestStatusMap;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, public requestService: RequestService) {
    
  }

  ngOnInit() {
    this.requestService.getRequests(1001).subscribe(result=> {
      this.reqData=result
      console.log(this.reqData);
    // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.reqData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSubmit(request:RequestData,action:string){
    const dialogRef = this.dialog.open(GenericDialogComponent,{
      height: '250px',
      width: '600px',
    });
    dialogRef.componentInstance.onAdd.subscribe((data) => {
        this.comment = data;
      });

    dialogRef.afterClosed().subscribe((result) => {
        dialogRef.componentInstance.onAdd.unsubscribe(); 
        if(result){
        console.log(this.comment);
        request.requestStatus=action;
        }
    });
  }

  onAccept(request:RequestData){
    this.onSubmit(request,requestStatusMap.get('APPROVED'));
  }

  onReject(request:RequestData){
    this.onSubmit(request,requestStatusMap.get('REJECTED'));
  }

  onMeet(request:RequestData){
    this.onSubmit(request,requestStatusMap.get('PENDING'));
  }

  viewReqDescription(row:RequestData){
    const dialogRef = this.dialog.open(DisplayDataDialogComponent,{
      data:{value:row.requestDescription}
    });
  }

}
