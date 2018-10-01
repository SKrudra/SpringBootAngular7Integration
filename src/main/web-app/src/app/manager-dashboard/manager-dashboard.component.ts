import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
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

  displayedColumns: string[] = ['id', 'reqDesc', 'empId', 'status','action'];
  dataSource: MatTableDataSource<RequestData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    reqData = [{id:'1',reqDesc:'Seat change request',empId:'121',status:'open'},
              {id:'2',reqDesc:'PC not working.',empId:'124',status:'closed'},
              {id:'3',reqDesc:'Project discussion.',empId:'123',status:'closed'},
              {id:'4',reqDesc:'Team outing tour.',empId:'125',status:'Rejected'},
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
}
