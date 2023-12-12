import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor() { }
  getProducts () {
    return [
      {id: 1, name : "Producto 1", price: 19.99},
      {id: 2, name : "Producto 2", price: 29.99},
      {id: 3, name : "Producto 3", price: 39.99},
    ];
  }
}
