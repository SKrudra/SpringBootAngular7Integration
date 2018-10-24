import { Component, OnInit } from '@angular/core';
import {LoginDetail} from '../models/login-detail';
import {AuthService} from '../services/auth.service';
import {SecurityContext} from '../security-context';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.route.queryParams.subscribe(params => {
      this.googleCode = params['code'];
    });
   }

  loginDetail = new LoginDetail();
  securityContext: SecurityContext = null;

  googleCode: string;
  postUrl = '/api/google';


  ngOnInit() {
    if (this.googleCode) {
      this.http.post<SecurityContext>(this.postUrl, this.googleCode).subscribe(res => {
        console.log(res);
        if (res != null) {
          this.authService.setSecurityContext(res);
          this.authService.setToken(res.token);
        }
        if (res.token != null) {
          let redirectURL = this.route.snapshot.paramMap.get('redirectURL');
          redirectURL = redirectURL ? redirectURL : '';
          this.router.navigate([redirectURL]);
        }
      });
    }
  }

  public login() {
    this.authService.authenticate(this.loginDetail).subscribe(
      ld => {
        if (ld.token != null) {
          let redirectURL = this.route.snapshot.paramMap.get('redirectURL');
          redirectURL = redirectURL ? redirectURL : '';
          this.router.navigate([redirectURL]);
        }
      }
    );
  }

}
