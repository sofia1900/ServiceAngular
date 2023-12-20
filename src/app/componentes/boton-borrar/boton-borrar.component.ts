import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductosService} from "../../service/productos.service";

@Component({
  selector: 'app-boton-borrar',
  standalone: true,
  imports: [],
  templateUrl: './boton-borrar.component.html',
  styleUrl: './boton-borrar.component.css'
})
export class BotonBorrarComponent {

  @Output() borrar = new EventEmitter();

  borrarProducto(){
    this.borrar.emit()
  }

}
