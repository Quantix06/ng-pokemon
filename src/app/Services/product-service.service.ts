import { Injectable } from "@angular/core";
import { Product } from "../product";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  products = [
    <Product>{
      id: 0,
      name: "Harry Potter",
      isFavorite: false,
      createdDate: new Date(1980, 6, 31),
      price: 25,
    },
    <Product>{
      id: 1,
      name: "Ronnald Weasley",
      isFavorite: false,
      createdDate: new Date(1980, 3, 1),
      price: 20,
    },
    <Product>{
      id: 2,
      name: "Hermione Granger",
      isFavorite: false,
      createdDate: new Date(1979, 8, 19),
      price: 30,
    },
    <Product>{
      id: 3,
      name: "Neville Londubas",
      isFavorite: false,
      createdDate: new Date(1980, 7, 30),
      price: 18,
    },
    <Product>{
      id: 4,
      name: "Albus Dumbledore",
      isFavorite: false,
      createdDate: new Date(1881, 7, 30),
      price: 50,
    },
    <Product>{
      id: 5,
      name: "Severus Snape",
      isFavorite: false,
      createdDate: new Date(1960, 1, 9),
      price: 35,
    },
    <Product>{
      id: 6,
      name: "Draco Malfoy",
      isFavorite: false,
      createdDate: new Date(1980, 5, 5),
      price: 22,
    },
    <Product>{
      id: 7,
      name: "Luna Lovegood",
      isFavorite: false,
      createdDate: new Date(1981, 2, 13),
      price: 19,
    },
    <Product>{
      id: 8,
      name: "Ginny Weasley",
      isFavorite: false,
      createdDate: new Date(1981, 7, 11),
      price: 21,
    },
    <Product>{
      id: 9,
      name: "Fred Weasley",
      isFavorite: false,
      createdDate: new Date(1978, 3, 1),
      price: 23,
    },
    <Product>{
      id: 10,
      name: "George Weasley",
      isFavorite: false,
      createdDate: new Date(1978, 3, 1),
      price: 24,
    },
    <Product>{
      id: 11,
      name: "Minerva McGonagall",
      isFavorite: false,
      createdDate: new Date(1935, 9, 4),
      price: 40,
    },
    <Product>{
      id: 12,
      name: "Hagrid",
      isFavorite: false,
      createdDate: new Date(1928, 11, 6),
      price: 45,
    },
    <Product>{
      id: 13,
      name: "Sirius Black",
      isFavorite: false,
      createdDate: new Date(1960, 10, 11),
      price: 28,
    },
    <Product>{
      id: 14,
      name: "Remus Lupin",
      isFavorite: false,
      createdDate: new Date(1960, 2, 10),
      price: 26,
    },
  ];
  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products[id];
  }
  switchFav(product: Product) {
    product.isFavorite = !product.isFavorite;
  }
  constructor() {}
}