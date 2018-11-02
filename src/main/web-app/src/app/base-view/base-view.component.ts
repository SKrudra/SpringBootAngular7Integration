import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: ['./base-view.component.css']
})
export class BaseViewComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    if (authService.securityContext.role === 'EMPLOYEE') {
		this.navLinks.shift();
    } else if(authService.securityContext.managerName === null) {
    	this.navLinks.pop();
        this.router.navigate(['dashboard/mgrdashboard']);
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
