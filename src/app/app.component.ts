import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Observable} from "rxjs";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = "ob1";
  posts$ : Observable<any[]> = this.dataService.getPosts();

  constructor(private dataService : DataService) {}


  //1.	¿Por qué se añade un dólar a la variable posts?
  // Para indicar que la variable es un Observable
  //2.	Averigua en que consiste el pipe | async
  /*
    La tubería async se suscribe a un Observable o Promise y devuelve el último
     valor que ha emitido. Cuando se emite un nuevo valor, la tubería async
     marca el componente que se verificará en busca de cambios. Cuando el
     componente se destruye, la async se da de baja automáticamente
     para evitar posibles pérdidas de memoria.
      https://angular.io/api/common/AsyncPipe
   */
  //3.	Aparte del método get, que otros métodos se pueden utilizar con observables, y para qué sirven.
  //get: Se utiliza para recuperar información del servidor.
  //put: Se utiliza para actualizar un recurso en el servidor. Debe contener todos los datos del recurso actualizado.
  //post: se utiliza para enviar datos al servidor para crear nuevos recursos.
  //delete: Se utiliza para eliminar un recurso en el servidor.

}
