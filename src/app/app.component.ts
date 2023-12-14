import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {ClientesService} from "./service/clientes.service";
import {Cliente} from "./cliente.model";
import {ClienteAltaComponent} from "./componentes/cliente-alta/cliente-alta.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ClienteAltaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {}

}
