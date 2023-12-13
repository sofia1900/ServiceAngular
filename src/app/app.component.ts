import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CabeceraComponent} from "./componentes/cabecera/cabecera.component";
import {CuerpoComponent} from "./componentes/cuerpo/cuerpo.component";
import {PieComponent} from "./componentes/pie/pie.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CabeceraComponent, CuerpoComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
