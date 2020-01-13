import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { ProductsComponent } from "./views/products/products.component";
import { CartComponent } from "./views/cart/cart.component";
import { AboutComponent } from "./views/about/about.component";
import { ProductDetailsComponent } from "./views/product-details/product-details.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "product-details/:id", component: ProductDetailsComponent },
  { path: "cart", component: CartComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
