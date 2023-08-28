import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/AuthService.service';
import { UserServices } from '../services/UserServices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart!: any;
  totalPrice: number =0;
  dataService: any;
  data: any = [];
  constructor(private service : UserServices,private refresh : AuthService,private route : Router)
  {
  } 

  assignProducts() {
    throw new Error('Method not implemented.');
  }
  getProductType() {
    throw new Error('Method not implemented.');
  }
  getOccasions() {
    throw new Error('Method not implemented.');
  }
  getBrand() {
    throw new Error('Method not implemented.');
  }

  removeproduct(pid: number)
  {
    this.service.deletefromcart(AuthService.id,pid).subscribe( res =>{})
    this.refresh.performCartAction();
  }
  
  calculateTotalPrice() {
    this.totalPrice = 0; 
    for (const item of this.cart) {
      this.totalPrice += item.price;
    }
  }
   buy()
   {
    alert('Purchased');
   }

  ngOnInit()
  {
    this.service.cart(AuthService.id).subscribe(
      res => { this.cart = res;this.calculateTotalPrice();})
    this.refresh.cartAction$.subscribe(() =>
    {
      this.ngOnInit();
    });
  }

}
