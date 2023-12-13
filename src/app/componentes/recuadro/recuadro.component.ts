import {Component, Input} from '@angular/core';
import {TablaComponent} from "../tabla/tabla.component";
import {BotonComponent} from "../boton/boton.component";

@Component({
  selector: 'app-recuadro',
  standalone: true,
  imports: [
    TablaComponent,
    BotonComponent
  ],
  templateUrl: './recuadro.component.html',
  styleUrl: './recuadro.component.css'
})
export class RecuadroComponent {
  @Input() boton = "" ;
  @Input() tituloT = "" ;
  @Input() datosT: any[] = [];
}
