import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { GetallproductsComponent } from './getallproducts/getallproducts.component';
import { LoginService } from './services/LoginService.service';
import { ProductsComponent } from './products/products.component';
import { SignupService } from './services/SignupService.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './services/AuthService.service';
import { UserServices } from './services/UserServices.service';
import { DataService } from './services/data.service';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    FooterComponent,
    SignupComponent,
    GetallproductsComponent,
    ProductsComponent,
    DashboardComponent,
    ProfileComponent,
    ProductDisplayComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [AuthService,UserServices,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
