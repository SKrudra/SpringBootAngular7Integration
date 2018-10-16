import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { DisplayDataDialogComponent } from '../display-data-dialog/display-data-dialog.component';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';
import { DiscussionDialogComponent } from '../discussion-dialog/discussion-dialog.component';

import { CommentService } from '../services/comment.service';
import { RequestData } from '../models/request-data';
import { RequestService } from '../services/request.service';
import { requestStatusMap, loginDetailRoleMap } from '../constants';



@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})

export class RequestComponent implements OnInit {

  myEmpId: number;
  disableAddRequest: boolean; // true if there is any request which is not inactivated
  comment: string;
  displayedColumns: string[] = ['reqDesc', 'status', 'action'];
  dataSource: MatTableDataSource<RequestData>;
  requestStatusMap = requestStatusMap;
  commentsAreThere: boolean;
  reqData: RequestData[] = [];


  constructor(public dialog: MatDialog,
              public requestService: RequestService,
              public commentService: CommentService
  ) {
    this.myEmpId = 1003;
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
      if (result) {
        this.requestService.addRequest(this.myEmpId, this.comment).subscribe(
          err => console.log(err)
        );
        this.disableAddRequest = true;
        this.getRequests();
        this.dataSource.data = this.filterRequestData(this.reqData);
      }
    });
  }

  filterRequestData(reqData: RequestData[]): RequestData[] {
      return reqData.filter(request => request.status !== 'INACTIVATED');
  }

  onAddComment(request: RequestData) {
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      height: '250px',
      width: '600px',
    });
    dialogRef.componentInstance.onAdd.subscribe((data) => {
        this.comment = data;
      });

    dialogRef.afterClosed().subscribe((result) => {
        dialogRef.componentInstance.onAdd.unsubscribe();
        if (result) {
          request.comment = this.comment;
          this.commentService.addComment(request.id, this.comment, loginDetailRoleMap.get('EMPLOYEE')).subscribe();
        }
    });
  }

  onViewDiscussion(request: RequestData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = '700px';
    dialogConfig.width = '500px';
    dialogConfig.data = {
      requestId: request.id
    };
    const dialogRef = this.dialog.open(DiscussionDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {

      }
    });
  }

}
