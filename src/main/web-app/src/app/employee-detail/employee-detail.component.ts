import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { MatCard } from '@angular/material';
import { AuthService } from '../services/auth.service';
import { SecurityContext } from '../models/security-context';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  securityContext: SecurityContext;

  constructor(
    public authService: AuthService
  ) {
    this.securityContext = authService.securityContext;
  }

  ngOnInit() { }

}
