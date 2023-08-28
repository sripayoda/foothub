import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class AuthService 
{
    public static loggedin : boolean;
    public static id: number = 0;
    public static username : string = '';
    public static phno: string = '';
    public static mail: string = '';
    public static pass: string = '';

    private loginAction = new Subject<void>();
    private loadAction = new Subject<void>();
    private productAction = new Subject<void>();
    private cartAction = new Subject<void>();

    loginAction$ = this.loginAction.asObservable();
    loadAction$ = this.loadAction.asObservable();
    productAction$ = this.productAction.asObservable();
    cartAction$ = this.cartAction.asObservable();

     performLoginAction() {
    this.loginAction.next();
     }
     performLoadAction(){
      this.loadAction.next();
     }
     performProductAction(){
      this.productAction.next();
     }

     performCartAction(){
      this.cartAction.next();
     }

}