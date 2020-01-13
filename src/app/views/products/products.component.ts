import { Component, OnInit, Input } from "@angular/core";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  @Input() productList: any;
  products: any = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productList
      ? (this.products = this.productList)
      : this.productsService
          .getProducts()
          .subscribe(data => (this.products = data));
  }
}
