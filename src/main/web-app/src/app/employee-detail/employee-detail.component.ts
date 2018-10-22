import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { MatCard } from '@angular/material';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  myEmpId: number;
  employee: Employee;

  constructor(
    public employeeService: EmployeeService,
    public authService: AuthService
  ) {
    this.myEmpId = authService.securityContext.id;
  }

  ngOnInit() {
    this.employeeService.getEmployee(this.myEmpId).subscribe(result => {
      this.employee = result;
    });
  }

}
