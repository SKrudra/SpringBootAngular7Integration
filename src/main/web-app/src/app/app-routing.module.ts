import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { BaseViewComponent } from './base-view/base-view.component';
import { RequestComponent } from './request/request.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'empdetails',component:EmployeeDetailComponent},
  {path:'dashboard',component:BaseViewComponent,
  children:[
    {path:'',redirectTo:'mgrdashboard',pathMatch:'full'},
    {path:'mgrdashboard',component:ManagerDashboardComponent},    
    {path:'request', component:RequestComponent},
  ]
  },
  {path:'**',component:BaseViewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

