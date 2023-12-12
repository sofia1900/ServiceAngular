import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ProductosService} from "./Service/productos.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productos : any;
  constructor(private productosService : ProductosService) {}
  ngOnInit (){
    this.productos = this.productosService.getProducts()
  }
}
