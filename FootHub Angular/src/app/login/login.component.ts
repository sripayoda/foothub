import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { UserServices } from '../services/UserServices.service';
import { AuthService } from '../services/AuthService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginMessage: string='Inavlid Login Details !';
  msg: string = '#343a40';
  user: any;
 constructor(private service : UserServices,private router : Router,private load : AuthService){}
 loginform = new FormGroup(
  {
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  }
 )

 get username()
 {
  return this.loginform.get('username');
 }

 get password()
 {
  return this.loginform.get('password');
 }
 
 onSubmit() {
  
  this.service.login(this.loginform.value.username!,this.loginform.value.password!)
  .subscribe(result =>{
    this.user = result;
    AuthService.loggedin = true;
    AuthService.id = this.user.uId;
    AuthService.username= this.user.uName; 
    AuthService.mail = this.user.uEmail;
    AuthService.phno = this.user.uPhone;
    AuthService.pass = this.user.uPassword;
    console.log('details: '+ AuthService.username,AuthService.phno);
    this.load.performLoginAction();
    this.router.navigate(['']);
  },
    err => { this.msg = 'white';})
}
onSignupLinkClick(): void {
this.router.navigate(['/signup']);
}

}
 
