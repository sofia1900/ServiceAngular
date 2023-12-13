import { Component } from '@angular/core';
import {RecuadroComponent} from "../recuadro/recuadro.component";

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [
    RecuadroComponent
  ],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {
  cabeceraDAM = "DAM";
  cabeceraDAW = "DAW";
  cabeceraASIR = "ASIR";
  cabecera = "...";

  boton = "Consultar";

  datosDAM: any[] = [
    "Daniel Andela López",
    "José María Dorado Ruiz",
    "Natalia Cano López"
  ];
  datosDAW: any[] = [
    "María Muñoz López",
    "José Rodríguez Martín",
    "Lucía Sánchez Arribas"
  ];
  datosASIR: any[] = [
    "Alejandro Galán López",
    "José María Dorado Ruiz",
    "Arturo Carrasco Pérez"
  ];
  datos: any[] = [
    "Silvia Muñoz López",
    "María Martínez Ruiz",
    "Jorge Nieto López"
  ];
}
