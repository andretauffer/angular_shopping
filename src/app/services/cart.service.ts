import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class CartService {
  cookieValue: string;
  cart: any;
  currentCart: any;

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  cartsUrl = "http://localhost:3000/carts";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  getAllCarts() {
    return this.http.get(this.cartsUrl);
  }

  getCart() {
    this.cookieValue = this.cookieService.get("cart");
    return this.http.get(this.cartsUrl + "/" + this.cookieValue);
  }

  createCart() {
    this.cookieValue = this.cookieService.get("cart");
    this.cart = { id: this.cookieValue, products: [] };
    return this.http.post(this.cartsUrl, this.cart, this.httpOptions);
  }

  updateCart(data, currentCart) {
    this.cookieValue = this.cookieService.get("cart");
    this.cart = {
      id: this.cookieValue,
      products: [data, ...currentCart.products]
    };
    return this.http.put(
      this.cartsUrl + "/" + this.cookieValue,
      this.cart,
      this.httpOptions
    );
  }
}
