import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart: any;
  products: any;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(data => (this.cart = data));
  }
}
