import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { MatCard } from '@angular/material';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployee(1003).subscribe(result => {
      this.employee = result;
      console.log(this.employee);
    });
  }

}
