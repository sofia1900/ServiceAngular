import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  cabeceras = ["Nº", "Alumno"];
  @Input() titulo : string = ""
  @Input() datos: any[] = [];
}
