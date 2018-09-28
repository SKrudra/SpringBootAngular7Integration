import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { BaseViewComponent } from './base-view/base-view.component';
import { RequestComponent } from './request/request.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailComponent,
    BaseViewComponent,
    RequestComponent,
    ManagerDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
