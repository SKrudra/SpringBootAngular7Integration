import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: ['./base-view.component.css']
})
export class BaseViewComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public employeeService: EmployeeService
  ) {
    if (authService.securityContext.role === 'EMPLOYEE') {
      this.navLinks.shift();
    }
   }

  navLinks = [
              {path: './mgrdashboard', label: 'Manager Dashboard'},
              {path: './request', label: 'Request'}
            ];

  ngOnInit() {
  }

  myLogout() {
    this.authService.logout();
  }

}
