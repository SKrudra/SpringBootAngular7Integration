import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { GenericDialogComponent} from '../generic-dialog/generic-dialog.component';
import { DisplayDataDialogComponent} from '../display-data-dialog/display-data-dialog.component';
import { DiscussionDialogComponent } from '../discussion-dialog/discussion-dialog.component';
import { RequestService } from '../services/request.service';
import { CommentService } from '../services/comment.service';
import { RequestData } from '../models/request-data';
import { requestStatusMap, loginDetailRoleMap } from '../constants';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})

export class ManagerDashboardComponent implements OnInit {
  reqData: RequestData[];
  comment: string;
  displayedColumns: string[] = ['id', 'reqDesc', 'empId', 'status', 'action'];
  dataSource: MatTableDataSource<RequestData>;
  requestStatusMap = requestStatusMap;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
              public requestService: RequestService,
              public commentService: CommentService
  ) {

  }

  ngOnInit() {
    this.requestService.getRequests(1001).subscribe(result => {
      this.reqData = result;
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

  onSubmit(request: RequestData, action: string) {
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
          request.status = action;
          request.comment = this.comment;
          this.requestService.updateRequest(request).subscribe();
        }
    });
  }

  onAccept(request: RequestData) {
    this.onSubmit(request, requestStatusMap.get('APPROVED'));
  }

  onReject(request: RequestData) {
    this.onSubmit(request, requestStatusMap.get('REJECTED'));
  }

  onMeet(request: RequestData) {
    this.onSubmit(request, requestStatusMap.get('INDISCUSSION'));
  }

  viewReqDescription(row: RequestData) {
    const dialogRef = this.dialog.open(DisplayDataDialogComponent, {
      data: {value: row.description}
    });
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
          this.commentService.addComment(request.id, this.comment, loginDetailRoleMap.get('MANAGER')).subscribe();
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
