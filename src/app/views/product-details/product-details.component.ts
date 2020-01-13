import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../services/products.service";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  id: string;
  product: any;
  cart: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  loadCart() {
    this.cartService.getCart().subscribe(response => (this.cart = response));
  }

  addToCart(id) {
    this.cartService
      .getCart()
      .subscribe(cart =>
        this.cartService
          .updateCart(id, cart)
          .subscribe(() => console.log("added to cart"))
      );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.productsService
        .getProductById(this.id)
        .subscribe(data => (this.product = data));
    });
    this.loadCart();
  }
}
