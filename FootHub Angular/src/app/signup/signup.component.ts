import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { UserServices } from '../services/UserServices.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/AuthService.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  Message: string = 'User Already Exists...!';
  msg: string = '#343a40';
  key! : string;
 constructor(private service : UserServices,private router : Router){console.log(AuthService.loggedin,AuthService.username); this.key=AuthService.username}
 signupform = new FormGroup(
  {
    uName : new FormControl('',Validators.required),
    uEmail: new FormControl('', [Validators.required, Validators.email]),
    uPassword : new FormControl('',Validators.required),
    uPhone : new FormControl('',Validators.required),
    uRole: new FormControl('User'),
  }
 )

 get uName()
 {
  return this.signupform.get('uName');
 }
 get uEmail() 
 {
  return this.signupform.get('uEmail');
}
 get uPassword()
 {
  return this.signupform.get('uPassword');
 }

 get uPhone()
 {
  return this.signupform.get('uPhone');
 }
 
 onSubmit() {
  const formData = this.signupform.value;
  console.log(formData);
  this.service.signup(formData)
  .subscribe(result =>{setTimeout(()=>{this.router.navigate(['/login'])},1000); AuthService.loggedin=false},
    err => { this.msg = 'white';})
}
}
 


