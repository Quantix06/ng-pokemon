import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../product";

@Pipe({
  name: "productPipe",
})
export class ProductPipe implements PipeTransform {
  transform(
    products: Product[],
    sortBy?: string
  ): Product[] {
    if (!products || !sortBy) {
      return products;
    }

    switch (sortBy) {
      case "recent":
        return products.sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime());
      case "oldest":
        return products.sort((a, b) => a.createdDate.getTime() - b.createdDate.getTime());
      case "asc":
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case "desc":
        return products.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return products;
    }
  }
}
