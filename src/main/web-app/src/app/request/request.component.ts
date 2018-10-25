import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { GenericDialogComponent } from '../dialog-boxes/generic-dialog/generic-dialog.component';
import { DisplayDataDialogComponent } from '../dialog-boxes/display-data-dialog/display-data-dialog.component';
import { RequestDialogComponent } from '../dialog-boxes/request-dialog/request-dialog.component';
import { DiscussionDialogComponent } from '../dialog-boxes/discussion-dialog/discussion-dialog.component';

import { CommentService } from '../services/comment.service';
import { RequestData } from '../models/request-data';
import { RequestService } from '../services/request.service';
import { requestStatusMap, loginDetailRoleMap } from '../constants';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})

export class RequestComponent implements OnInit {

  myEmpId: number;
  myEmpRole: string; // used in onViewDiscussion
  disableAddRequest: boolean; // true if there is any request which is not inactivated
  comment: string;
  displayedColumns: string[] = ['reqDesc', 'startDtm', 'tentativeEndDtm', 'status', 'action'];
  dataSource: MatTableDataSource<RequestData>;
  requestStatusMap = requestStatusMap;
  commentsAreThere: boolean;
  reqData: RequestData[] = [];

  constructor(public dialog: MatDialog,
              public requestService: RequestService,
              public commentService: CommentService,
              public authService: AuthService
  ) {
    this.myEmpId = authService.securityContext.id;
    this.myEmpRole = authService.securityContext.role;
    this.commentsAreThere = false;
  }


  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.requestService.getRequestsForEmployee(this.myEmpId).subscribe(result => {
          if (result) {
            this.reqData.push(result);
            if (this.reqData.length > 0) {
              this.disableAddRequest = true;
              this.commentService.getCommentsForRequest(this.reqData[0].id).subscribe(result2 => {
                if (result2) {
                  this.commentsAreThere = true;
                }
              });
            }
            this.dataSource = new MatTableDataSource(this.filterRequestData(this.reqData));
          }
        });
  }


  onCancel(request: RequestData) {
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      height: '250px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
        dialogRef.componentInstance.onAdd.unsubscribe();
        if (result) {
          request.status = 'INACTIVATED';
          this.requestService.updateRequest(request).subscribe();
          this.dataSource.data = this.filterRequestData(this.reqData);
          this.disableAddRequest = false;
        }
    });
  }

  onAddRequest() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = '600px';
    dialogConfig.width = '600px';
    dialogConfig.data = {
      empId: this.myEmpId
    };
    const dialogRef = this.dialog.open(RequestDialogComponent, dialogConfig);


    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.disableAddRequest = true;
        this.getRequests();
        this.dataSource.data = this.filterRequestData(this.reqData);
      }
    });
  }

  filterRequestData(reqData: RequestData[]): RequestData[] {
      return reqData.filter(request => request.status !== 'INACTIVATED');
  }

  onViewDiscussion(request: RequestData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = '700px';
    dialogConfig.width = '500px';
    dialogConfig.data = {
      requestId: request.id,
      empRole: this.myEmpRole
    };
    const dialogRef = this.dialog.open(DiscussionDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {

      }
    });
  }

  onViewRequest(request: RequestData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = '600px';
    dialogConfig.width = '600px';
    dialogConfig.data = {
      theRequest: request
    };
    const dialogRef = this.dialog.open(DisplayDataDialogComponent, dialogConfig);
  }

}
