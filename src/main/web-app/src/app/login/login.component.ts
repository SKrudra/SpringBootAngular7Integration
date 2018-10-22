import { Component, OnInit } from '@angular/core';
import {LoginDetail} from '../models/login-detail';
import{AuthService} from '../services/auth.service';
import{SecurityContext} from '../security-context';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService:AuthService,private router:Router,private route: ActivatedRoute) { }
  loginDetail=new LoginDetail();
  securityContext:SecurityContext=null;
  ngOnInit() {
  }

  public login(){
    
    this.authService.authenticate(this.loginDetail).subscribe(
      ld=>{
        if(ld.token!=null){
          let redirectURL = this.route.snapshot.paramMap.get('redirectURL');
          redirectURL = redirectURL? redirectURL:'';
          this.router.navigate([redirectURL]);
        }
      }
    );
  }



}
