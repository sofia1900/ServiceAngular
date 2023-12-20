import { Injectable } from '@angular/core';
import {Producto} from "../interfaces/Producto";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos : Producto[] =  [
    {id: "1", nombre : "manzana", precio : 2.20, unidades : 25},
    {id: "2", nombre : "zanahoria", precio : 1.80, unidades : 20},
    {id: "3", nombre : "mandarina", precio : 2.40, unidades : 32},
    {id: "4", nombre : "tomate", precio : 1.95, unidades : 28},
    {id: "5", nombre : "pera", precio : 2.60, unidades : 35}
  ]
  constructor() { }

  getProductos () : Producto[]{
    return this.productos
  }
  newProducto (producto : Producto){
    this.productos.push(producto)
  }

  comprarProducto (id : string){
    for (let p of this.productos){
      if (p.id == id){
        p.unidades = p.unidades-1;
      }
    }
  }

  addProducto (id : string){
    for (let p of this.productos){
      if (p.id == id){
        p.unidades = p.unidades+1;
      }
    }
  }

  eliminarProducto (id : string){
    for (let pos = 0 ; pos < this.productos.length ; pos++){
      if (this.productos[pos].id == id){
        this.productos.splice(pos, 1)
      }
    }
  }

}
