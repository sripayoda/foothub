

import { Component,OnInit } from '@angular/core';
import { AuthService } from '../services/AuthService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
 logstatus!: boolean;
 navbutton: string='Login';
 constructor(private load : AuthService, private route : Router)
 { }
 
 logDetails()
 {
    if(this.logstatus)
    {
      AuthService.loggedin = false;
      this.navbutton = 'Login';
      this.load.performLoadAction();
      this.route.navigate(['']);
    }
    else
    {
    this.route.navigate(['/login']);
    }
 }

 
 ngOnInit() {
  this.logstatus=AuthService.loggedin;
  this.load.loginAction$.subscribe(() => {
    this.navbutton='Logout';
    this.ngOnInit();
  });
  this.load.loadAction$.subscribe(() =>
  {
      this.ngOnInit();
  });
}
}
