import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetallproductsComponent } from './getallproducts/getallproducts.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path : "getallproducts", component: GetallproductsComponent},
  {path : "login", component: LoginComponent},
  {path : "signup", component: SignupComponent},
  {path : 'profile', component: ProfileComponent},
  {path : 'products', component : ProductsComponent},
  {path : 'productdisplay/:id', component : ProductDisplayComponent},
  {path : 'products/:id', component : ProductsComponent},
  {path : 'cart', component: CartComponent},
  {path : '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
