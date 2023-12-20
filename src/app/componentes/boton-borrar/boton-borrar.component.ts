import {Component, Input} from '@angular/core';
import {ProductosService} from "../../service/productos.service";

@Component({
  selector: 'app-boton-borrar',
  standalone: true,
  imports: [],
  templateUrl: './boton-borrar.component.html',
  styleUrl: './boton-borrar.component.css'
})
export class BotonBorrarComponent {

  @Input() idBorrar = ""

  constructor(private productoService : ProductosService) {}
  borrarProducto(){
    this.productoService.eliminarProducto(this.idBorrar)
  }

}
