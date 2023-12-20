import {Component, Input} from '@angular/core';
import {ProductosService} from "../../service/productos.service";

@Component({
  selector: 'app-boton-comprar',
  standalone: true,
  imports: [],
  templateUrl: './boton-comprar.component.html',
  styleUrl: './boton-comprar.component.css'
})
export class BotonComprarComponent {

  @Input() idComprado = "";

  constructor(private productoService : ProductosService){}
  comprarProducto(){
    this.productoService.comprarProducto(this.idComprado)
  }

}
