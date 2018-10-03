import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';

import{GenericDialogComponent} from '../generic-dialog/generic-dialog.component';
import{DisplayDataDialogComponent} from '../display-data-dialog/display-data-dialog.component';

export interface RequestData {
  id: string;
  reqDesc: string;
  empId: string;
  status: string;
}

/** Constants used to fill up our data base. */
let reqData : RequestData[];

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  comment:string;
  displayedColumns: string[] = ['id', 'reqDesc', 'empId', 'status','action'];
  dataSource: MatTableDataSource<RequestData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 users
    reqData = [{id:'1',reqDesc:'Seat change request',empId:'121',status:'open'},
              {id:'2',reqDesc:'PC not working.',empId:'124',status:'closed'},
              {id:'3',reqDesc:'Project discussion.',empId:'123',status:'closed'},
              {id:'4',reqDesc:'Team outing tour.',empId:'125',status:'pending'},
              {id:'5',reqDesc:'Appraisal discussion',empId:'129',status:'Closed'},
              {id:'6',reqDesc:'Location Change request',empId:'130',status:'open'},
              {id:'7',reqDesc:'Work from home request',empId:'131',status:'Rejected'}
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(reqData);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
        request.status=action;
        }
    });
  }

  onAccept(request:RequestData){
    this.onSubmit(request,"approved");
  }

  onReject(request:RequestData){
    this.onSubmit(request,"rejected");
  }

  onMeet(request:RequestData){
    this.onSubmit(request,"pending");
  }

  viewReqDescription(row){
    const dialogRef = this.dialog.open(DisplayDataDialogComponent,{
      data:{value:row.reqDesc}
    });
  }

}
