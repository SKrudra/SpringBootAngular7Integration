import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { BaseViewComponent } from './base-view/base-view.component';
import { RequestComponent } from './request/request.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModules } from './material';

import 'hammerjs';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailComponent,
    BaseViewComponent,
    RequestComponent,
    ManagerDashboardComponent,
    GenericDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModules,
    ReactiveFormsModule
  ],
  entryComponents:[GenericDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
