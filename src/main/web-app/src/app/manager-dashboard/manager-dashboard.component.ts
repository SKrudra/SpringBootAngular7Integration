import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDatepicker, MatDatepickerInputEvent, MatSnackBar} from '@angular/material';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { GenericDialogComponent} from '../dialog-boxes/generic-dialog/generic-dialog.component';
import { DisplayDataDialogComponent} from '../dialog-boxes/display-data-dialog/display-data-dialog.component';
import { DiscussionDialogComponent } from '../dialog-boxes/discussion-dialog/discussion-dialog.component';
import { RequestService } from '../services/request.service';
import { CommentService } from '../services/comment.service';
import { RequestData } from '../models/request-data';
import { requestStatusMap, loginDetailRoleMap } from '../constants';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})

export class ManagerDashboardComponent implements OnInit {

  reqData: RequestData[];
  comment: string;
  displayedColumns: string[] = ['id', 'reqDesc', 'empId', 'startDtm', 'tentativeEndDtm', 'status', 'action'];
  dataSource: MatTableDataSource<RequestData>;
  requestStatusMap = requestStatusMap;
  myMgrId: number;
  myEmpRole: string; // used in onViewDiscussion

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
              public requestService: RequestService,
              public commentService: CommentService,
              public authService: AuthService,
              public snackBar: MatSnackBar
  ) {
    this.myMgrId = authService.securityContext.id;
    this.myEmpRole = authService.securityContext.role;
  }


  dateChanged(request: RequestData, event: MatDatepickerInputEvent<Date>) {
    request.tentativeEndDtm = event.value;
    this.requestService.updateRequest(request).subscribe();
    this.snackBar.open('Tentative data changed', 'SUCCESS', {duration : 3000});
  }

  ngOnInit() {
    this.requestService.getRequests(this.myMgrId).subscribe(result => {
      this.reqData = result;
      this.reqData.forEach( (req) => {
        req.tentativeEndDtm = new Date(req.tentativeEndDtm);
      });
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
          this.snackBar.open('Request Status Changed', action , {duration : 3000});
        }
    });
  }

  onAccept(request: RequestData) {
    request.tentativeEndDtm = new Date();
    this.onSubmit(request, requestStatusMap.get('APPROVED'));
  }

  onReject(request: RequestData) {
    this.onSubmit(request, requestStatusMap.get('REJECTED'));
  }

  onMeet(request: RequestData) {
    this.onSubmit(request, requestStatusMap.get('INDISCUSSION'));
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
