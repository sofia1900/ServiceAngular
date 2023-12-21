import {Component, OnInit} from '@angular/core';
import {ProductosService} from "../../service/productos.service";
import {CompraService} from "../../service/compra.service";
import {BotonAddComponent} from "../boton-add/boton-add.component";
import {BotonBorrarComponent} from "../boton-borrar/boton-borrar.component";
import {BotonComprarComponent} from "../boton-comprar/boton-comprar.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {Producto} from "../../interfaces/Producto";

@Component({
  selector: 'app-lista-compra',
  standalone: true,
  imports: [
    BotonAddComponent,
    BotonBorrarComponent,
    BotonComprarComponent,
    NgForOf,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './lista-compra.component.html',
  styleUrl: './lista-compra.component.css'
})
export class ListaCompraComponent {
  constructor(private compraService : CompraService) {}

  public productosComprados$ : Observable<Producto[]> = this.compraService.mostrarLista()
  borrarProducto (id : string) {
    this.compraService.eliminarProducto(id)
  }
}
