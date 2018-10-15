import { Component, OnInit } from '@angular/core';
import {LoginDetail} from '../models/login-detail';
import{AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }
  loginDetail=new LoginDetail();
  ngOnInit() {
  }

  public login(){
    console.log(this.loginDetail);
    this.authService.authenticate(this.loginDetail).subscribe(
      ld=>{if(ld!=null)this.loginDetail=ld}
    );
  }


}
