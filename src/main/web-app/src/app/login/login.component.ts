import { Component, OnInit } from '@angular/core';
import {LoginDetail} from '../models/login-detail';
import{AuthService} from '../auth.service';
import{SecurityContext} from '../security-context';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }
  loginDetail=new LoginDetail();
  securityContext:SecurityContext=null;
  ngOnInit() {
  }

  public login(){
    
    this.authService.authenticate(this.loginDetail).subscribe(
      ld=>{
        if(ld!=null){
          this.securityContext=ld;
          localStorage.setItem("SRM_USER",ld.token);
          console.log(this.securityContext);
        }
      }
    );
  }


}
