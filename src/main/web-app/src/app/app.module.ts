import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { BaseViewComponent } from './base-view/base-view.component';
import { RequestComponent } from './request/request.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModules } from './material';
import { HttpClientModule }    from '@angular/common/http';

import 'hammerjs';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';
import { DisplayDataDialogComponent } from './display-data-dialog/display-data-dialog.component';
import { RequestDialogComponent } from './request-dialog/request-dialog.component';
import { LoginComponent } from './login/login.component';
import { DiscussionDialogComponent } from './discussion-dialog/discussion-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailComponent,
    BaseViewComponent,
    RequestComponent,
    ManagerDashboardComponent,
    GenericDialogComponent,
    DisplayDataDialogComponent,
    RequestDialogComponent,
    LoginComponent,
    DiscussionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModules,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents:[GenericDialogComponent, DisplayDataDialogComponent, RequestDialogComponent, DiscussionDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
