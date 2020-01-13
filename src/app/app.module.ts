import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { ProductsComponent } from "./views/products/products.component";
import { NavbarComponent } from "./views/navbar/navbar.component";
import { CartComponent } from "./views/cart/cart.component";
import { AboutComponent } from "./views/about/about.component";
import { ProductDetailsComponent } from "./views/product-details/product-details.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NavbarComponent,
    CartComponent,
    AboutComponent,
    ProductDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
