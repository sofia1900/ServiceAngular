import { Injectable } from '@angular/core';
import {Producto} from "../interfaces/Producto";
import {Observable, of} from "rxjs";

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
      this.compra.push(producto)
    }
  }

  mostrarLista () : Observable<Producto[]> {
    return of(this.compra);
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
