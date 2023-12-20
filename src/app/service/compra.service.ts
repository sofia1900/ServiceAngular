import { Injectable } from '@angular/core';
import {ProductosService} from "./productos.service";
import {Producto} from "../interfaces/Producto";

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  constructor() { }

  compra : Producto[] = [];

  addProducto (producto : Producto){
    this.compra.push(producto)
  }
}
