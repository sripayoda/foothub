import { Component } from '@angular/core';
import { LoginService } from '../services/LoginService.service';


@Component({
  selector: 'app-getallproducts',
  templateUrl: './getallproducts.component.html',
  styleUrls: ['./getallproducts.component.css']
})
export class GetallproductsComponent {
  public products: any;
  constructor(private service: LoginService) { }

  ngOnInit(): void {
    this.getpProducts();
  }

  public getpProducts(): void 
  {
    this.service.getAllProducts().subscribe(result => {
      this.products = result;
      console.log(this.products);
    });
  }
}
