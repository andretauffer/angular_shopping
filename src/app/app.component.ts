import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import * as uuid from "uuid";
import { CartService } from "./services/cart.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Chocolate Store";
  userCookie = uuid();

  constructor(
    private cookieService: CookieService,
    private cartService: CartService
  ) {}

  localFun() {
    this.cartService
      .getAllCarts()
      .subscribe(data => console.log("data on app", data));
  }

  public ngOnInit() {
    if (!this.cookieService.get("cart")) {
      this.cookieService.set("cart", this.userCookie);
      return this.cartService
        .createCart()
        .subscribe(() => console.log("cart created"));
    }
  }
}
