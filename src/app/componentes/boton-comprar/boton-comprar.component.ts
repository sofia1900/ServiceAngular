import {Component, Input} from '@angular/core';
import {ProductosService} from "../../service/productos.service";
import {CompraService} from "../../service/compra.service";
import {Producto} from "../../interfaces/Producto";

@Component({
  selector: 'app-boton-comprar',
  standalone: true,
  imports: [],
  templateUrl: './boton-comprar.component.html',
  styleUrl: './boton-comprar.component.css'
})
export class BotonComprarComponent {

  @Input() productoComprado : Producto;
  constructor(private productoService : ProductosService, private compraService : CompraService){}
  comprarProducto(){
    this.productoService.comprarProducto(this.productoComprado.id)
    let product : Producto = {id : this.productoComprado.id, nombre : this.productoComprado.nombre, precio : this.productoComprado.precio, unidades : 1}
    this.compraService.addProducto(product)
  }

}
