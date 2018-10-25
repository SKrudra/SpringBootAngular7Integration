import { Component, OnInit } from '@angular/core';
import {LoginDetail} from '../models/login-detail';
import {AuthService} from '../services/auth.service';
import {SecurityContext} from '../security-context';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.route.queryParams.subscribe(params => {
      this.googleCode = params['code'];
    });
   }

  securityContext: SecurityContext = null;

  googleCode: string;

  googleCodeUrl = 'https://accounts.google.com/o/oauth2/auth?' +
  'redirect_uri=http://localhost:4200/login&' +
  'response_type=code&' +
  'client_id=698682231712-gbno37u3fdovq1rjrhurj4o6bo00okg9.apps.googleusercontent.com&' +
  'scope=https://www.googleapis.com/auth/userinfo.email&' +
  'approval_prompt=force&' +
  'access_type=offline';
  postUrl = '/api/google';


  ngOnInit() {
    this.form = this.fb.group({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });

    // check google login
    if (this.googleCode) {
      this.http.post<SecurityContext>(this.postUrl, this.googleCode).subscribe(res => {
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
    const loginDetail = new LoginDetail();
    loginDetail.userName = this.form.get('username').value;
    loginDetail.password = this.form.get('password').value;
    if (loginDetail.userName && loginDetail.password) {
      this.authService.authenticate(loginDetail).subscribe(
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

}
