import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ListaProductosComponent} from "./componentes/lista-productos/lista-productos.component";
import {NewProductoComponent} from "./componentes/new-producto/new-producto.component";
import {ListaCompraComponent} from "./componentes/lista-compra/lista-compra.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListaProductosComponent, NewProductoComponent, ListaCompraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Service';
}
