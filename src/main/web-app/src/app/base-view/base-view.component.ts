import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: ['./base-view.component.css']
})
export class BaseViewComponent implements OnInit {
        
    pendingCount:number;

  constructor(
    public authService: AuthService,
    public counterService: CounterService,
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
              {path: './request', label: 'Resignation'}
            ];

  ngOnInit() {
      this.counterService.currentCount.subscribe(count => this.pendingCount = count);
  }

  myLogout() {
    this.authService.logout();
  }

}
