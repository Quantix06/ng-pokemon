import { Component, inject,Input } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";

import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductPipe } from "../Pipes/product.pipe";
import { ProductService } from "../Services/product-service.service";
import { ResearchproductPipe } from "../Pipes/researchproduct.pipe";
@Component({
  selector: "app-product-grid",
  imports: [MatGridListModule, ProductCardComponent, ProductPipe,ResearchproductPipe],
  template: `
    <mat-grid-list cols="5" rowHeight="350px">
      @for (p of (products| researchproduct:(searchQuery)| productPipe:(sortedby) ); track p.id) {
      <mat-grid-tile>
        <app-product-card [product]="p">
        </app-product-card>
      </mat-grid-tile>
      }
    </mat-grid-list>
  `,
  styles: `mat-grid-list {
    width: 100%;
    margin: auto;
    gap: 10px; /* Add space between tiles */
  }
  
  mat-grid-tile {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `,
})
export class ProductGridComponent {
  @Input() sortedby = "desc";
  @Input() searchQuery = "";

  productservice = inject(ProductService);
  products = this.productservice.getProducts();
}
