import {Component, Input, OnInit} from '@angular/core';
import {CicloformativoService} from "../../service/cicloformativo.service";

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent{
  @Input() tituloB = "";
  @Input() msg  = "";

  constructor(private servicioCiclos : CicloformativoService) {}

  clicBoton () {
    this.servicioCiclos.showAlert(this.msg)
  }
}
