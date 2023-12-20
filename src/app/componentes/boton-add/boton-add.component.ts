import {Component, Input} from '@angular/core';
import {ProductosService} from "../../service/productos.service";

@Component({
  selector: 'app-boton-add',
  standalone: true,
  imports: [],
  templateUrl: './boton-add.component.html',
  styleUrl: './boton-add.component.css'
})
export class BotonAddComponent {

  @Input() idAdd = "";

  constructor(private productoService : ProductosService){}
  addProducto() {
    this.productoService.addProducto(this.idAdd)
  }
}
