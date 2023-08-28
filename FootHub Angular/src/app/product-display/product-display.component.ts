import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { CartProduct } from '../models/Cart';
import { AuthService } from '../services/AuthService.service';
import { UserServices } from '../services/UserServices.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent {
  public data: any = [];
  temp: any =[];
  public occasion: any = [];
  brand: any = [];
  productType: any = [];
  occasion_name = '';
  brand_name = '';
  product_type = '';
  
  cat_id: any;
  constructor(private dataService : DataService, private activatedRoute: ActivatedRoute,private service: UserServices)
  {
    
    this.cat_id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('constructor : '+this.cat_id);
  }
  ngOnInit(): void{
    this.getProduct();
  }

  addCart()
  {
    console.log('addcart : '+AuthService.id,this.cat_id);
    const p = new CartProduct(AuthService.id,this.cat_id)
    alert('Added to Cart');
    this.service.addcart(p).subscribe(res=>{console.log('added');},err=> {console.log('removed');})
  }

  buy()
  {
    alert('Purchased');
  }

  getProduct()
  {
    this.dataService.getProduct().subscribe(response=>
      {
        this.data = response;
        this.assignProducts();
      });
    this.getProductType();
    this.getOccasions();
    this.getBrand();
  }

  getOccasions()
  {
    this.dataService.getOccasions().subscribe(response=>
      {
          this.occasion = response;
      });
  }

  getBrand()
  {
    this.dataService.getBrand().subscribe(response =>
      {
          this.brand = response;    
      });
  }

  getProductType()
  {
    this.dataService.getProductType().subscribe(response =>
      {
          this.productType = response;
      });
  }


  assignProducts()
  {
    for(let i=0;i<this.data.length;i++)
    {
      if(this.data[i].pId == this.cat_id)
      {
        this.temp.push(this.data[i]);
      }
    }
    console.log(this.temp);
    for(let i=0;i<this.occasion.length;i++)
    {
      if(this.occasion[i].oId == this.temp[0].oId)
      {
        this.occasion_name = this.occasion[i].oName;
      }
      console.log(this.occasion[i]);
    }

    for(let i=0;i<this.brand.length;i++)
    {
      if(this.brand[i].bId == this.temp[0].bId)
      {
        this.brand_name = this.brand[i].bName;
      }
      console.log(this.brand[i]);
    }

    for(let i=0;i<this.productType.length;i++)
    {
      if(this.productType[i].tId == this.temp[0].tId)
      {
        this.product_type = this.productType[i].tName;
      }
      console.log(this.productType[i]);
    } 
  }
}
