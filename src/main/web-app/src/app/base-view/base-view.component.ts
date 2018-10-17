import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: ['./base-view.component.css']
})
export class BaseViewComponent implements OnInit {

  isManager: boolean;

  constructor(
    public authService: AuthService
  ) {
    if (authService.securityContext.role === 'MANAGER') {
      this.isManager = true;
    } else {
      this.isManager = false;
      this.navLinks.shift();
    }
   }

  navLinks = [
              {path: './mgrdashboard', label: 'Manager Dashboard'},
              {path: './request', label: 'Request'}
            ];

  ngOnInit() {
  }

}
