import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: ['./base-view.component.css']
})
export class BaseViewComponent implements OnInit {

  constructor(
    public authService: AuthService
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

}
