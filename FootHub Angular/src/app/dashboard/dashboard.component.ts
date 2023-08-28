import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public data: any = [];
  temp: any =[];
  

  constructor(private dataService : DataService)
  {

  }
  ngOnInit(): void{
    this.getProduct();
    
  }

  getProduct()
  {
    this.dataService.getProduct().subscribe(response=>
      {
          this.data = response;
          this.assignProducts();
      });
      
      
  }

  assignProducts()
  {
    for(let i=this.data.length - 1;i>=(this.data.length - 3);i--)
    {
      this.temp.push(this.data[i]);
    }
  }

}
