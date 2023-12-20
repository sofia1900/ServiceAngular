import { Injectable } from '@angular/core';
import {Producto} from "../interfaces/Producto";

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  constructor() { }

  compra : Producto[] = [];

  addProducto (producto : Producto){
    let encontrado = false;
    for (let p of this.compra){
      if (p.id == producto.id){
        p.unidades = p.unidades+1;
        encontrado = true;
      }
    }
    if(!encontrado){
      producto.unidades = 1
      this.compra.push(producto)
    }
  }

  mostrarLista () : Producto[] {
    return this.compra
  }

  eliminarProducto (id : string) {
    for (let pos = 0 ; pos < this.compra.length ; pos++){
      if (this.compra[pos].id == id){
        if (this.compra[pos].unidades > 1){
          this.compra[pos].unidades--
        }else{
          this.compra.splice(pos, 1)
        }
      }
    }
  }

}
