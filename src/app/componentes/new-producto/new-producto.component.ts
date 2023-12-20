import { Component } from '@angular/core';
import {ProductosService} from "../../service/productos.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-producto',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-producto.component.html',
  styleUrl: './new-producto.component.css'
})
export class NewProductoComponent {

  nombre = "";
  precio = 0;
  unidades = 0;

  constructor(private productosService : ProductosService) {}

  id = (this.productosService.productos.length+1).toString();

  addNew(){
    this.productosService.newProducto({id: this.id, nombre: this.nombre, precio: this.precio, unidades: this.unidades })
    this.nombre = "";
    this.precio = 0;
    this.unidades = 0;
  }


}
