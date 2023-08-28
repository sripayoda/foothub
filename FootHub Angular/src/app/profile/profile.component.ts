import { Component } from '@angular/core';
import { AuthService } from '../services/AuthService.service';
import { UserServices } from '../services/UserServices.service';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
 name!: string;
 phno!: string;
 mail!: string;
prof_or_update: number = 1;
delstatus: boolean = false;
formData!: User;
successmsg : string = '';
errormsg : string = '';

 constructor(private load : AuthService, private service: UserServices,private route : Router)
 {
  console.log('con : '+AuthService.username);
  this.name = AuthService.username;
  this.phno = AuthService.phno;
  this.mail = AuthService.mail;
 }


 update1()
 {
    
    this.prof_or_update=2;
    
 }

 update2()
 {
  this.formData = new User(this.name,this.mail,AuthService.pass,this.phno);
  this.service.update(AuthService.phno,AuthService.pass,this.formData).subscribe(
    res => {
       alert("Success");
      },
    error => {
    }
  );
  AuthService.username=this.name;
  AuthService.mail=this.mail;
  AuthService.phno=this.phno;
  this.prof_or_update=1;
 }
 cart()
 {
  this.route.navigate(['cart']);
 }

 del()
 {
  this.delstatus= true;
 }
 
 del2()
 {
  this.service.delete(AuthService.phno,AuthService.pass).subscribe(res=>{console.log('del : ',res)});
  AuthService.loggedin = false;
  this.load.performLoadAction();
  this.route.navigate(['login']);
 }
 ngOnInit() {
  console.log('nav in: '+AuthService.loggedin,AuthService.username)
  this.load.loginAction$.subscribe(() => {
    this.ngOnInit();
  });
}
}
