import { Component } from '@angular/core';
import {ProductosService} from "../../service/productos.service";
import {Producto} from "../../interfaces/Producto";
import {NgForOf, NgIf} from "@angular/common";
import {BotonBorrarComponent} from "../boton-borrar/boton-borrar.component";
import {BotonComprarComponent} from "../boton-comprar/boton-comprar.component";
import {BotonAddComponent} from "../boton-add/boton-add.component";

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    BotonBorrarComponent,
    BotonComprarComponent,
    BotonAddComponent
  ],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  constructor(private productosService : ProductosService) {}

  productos : Producto[] = this.productosService.getProductos()

  borrarProducto(id : string){
    this.productosService.eliminarProducto(id);
  }

}
