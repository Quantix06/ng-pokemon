import { Component, inject, EventEmitter, Output } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductPipe } from "./Pipes/product.pipe";
import { ProductService } from "./Services/product-service.service";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductGridComponent } from "./product-grid/product-grid.component";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    ProductGridComponent,
    HeaderComponent,
    FooterComponent,
  ],
  template: `
    <app-header
      (sortEvent)="handleChange($event)"
      (searchEvent)="onSearch($event)"
    />
    <div class="product-grid">
      <app-product-grid
        sortedby="{{ sortresult }}"
        searchQuery="{{ searchresult }}"
      ></app-product-grid>
      <router-outlet />
      <app-footer></app-footer>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "ng-pokemon";
  countFav = 0;
  sortresult = "asc";
  searchresult = "";

  productservice = inject(ProductService);
  products = this.productservice.getProducts();
  @Output() sortCardEvent = new EventEmitter<String>();
  @Output() searchCardEvent = new EventEmitter<String>();

  handleChange(sort: String) {
    this.sortresult = sort.toString();
    return sort;
  }
  onSearch(searchQuery: String) {
    this.searchresult = searchQuery.toString();
    return searchQuery;
  }
}
