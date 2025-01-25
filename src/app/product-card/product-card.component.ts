import { Component, Input, EventEmitter, Output,inject } from "@angular/core";
import { Product } from "../product";
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  UpperCasePipe,
} from "@angular/common";
import { ProductService } from "../Services/product-service.service";
@Component({
  selector: "app-product-card",
  imports: [CurrencyPipe, UpperCasePipe, DecimalPipe, DatePipe],
  template: `
    <div class="product-card">
  <h1 class="product-name">{{ product.name | uppercase }}</h1>
  <p class="product-price">
    {{ product.price | number | currency : "EUR" }}
  </p>
  <p class="product-date">
    ajouté le : {{ product.createdDate | date : "fullDate" : "" : "fr-FR" }}
  </p>
  <button class="toggle-button" (click)="switchFav()">
    {{ product.isFavorite ? "Remove from Favorites" : "Add to Favorites" }}
  </button>
</div>

  `,
  styles: `
  .product-card {
    background-color: white;
    border: 1px solid blue;
    border-radius: 8px;
    padding: 1rem;
    width: 100%; /* Use the full width of the grid tile */
    height: 250px; /* Reduced height */
    max-width: 200px; /* Optional: control maximum width */
    margin: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Space out content */
    text-align: center;
  }

  h1.product-name {
    font-size: 1.2rem; /* Smaller font size */
    color: blue;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.3rem 0;
    font-size: 0.9rem; /* Smaller font size */
    color: black;
  }

  p.product-price {
    font-weight: bold;
    color: #007bff;
  }

  p.product-date {
    font-style: italic;
    font-size: 0.8rem;
  }

  button.toggle-button {
    background-color: blue;
    color: white;
    border: none;
    padding: 0.3rem 0.6rem; /* Reduced padding */
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button.toggle-button:hover {
    background-color: #0056b3;
  }

  button.toggle-button:active {
    transform: scale(0.95);
  }
`,
})
export class ProductCardComponent {
  @Input({ required: true }) product: Product = {
    id: 0,
    name: "",
    isFavorite: false,
    price: 0,
    createdDate: new Date(),
  };
  @Output() addItemEvent = new EventEmitter<number>();
  productservice = inject (ProductService);
  products = this.productservice.getProducts();

  switchFav() {
    this.product.isFavorite = !this.product.isFavorite;
    this.addItemEvent.emit(this.product.isFavorite ? 1 : -1);
  }
}
