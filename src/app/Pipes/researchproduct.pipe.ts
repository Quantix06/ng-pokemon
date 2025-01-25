import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "../product";

@Pipe({
  name: 'researchproduct'
})
export class ResearchproductPipe implements PipeTransform {
  transform(
    products: Product[],
    searchBy?: string
  ): Product[] {
    if (!products || !searchBy) {
      console.log ("ko 1 : "+searchBy+"!");
      return products;
    }
    if (searchBy === ""||searchBy == "") {
      console.log ("ko 2");
      return products;
    }else{
      console.log ("result "+products.filter((product) => product.name.toLowerCase().includes(searchBy.toLowerCase())));
      return products.filter((product) => product.name.toLowerCase().includes(searchBy.toLowerCase()));
    }
    
  }
}
