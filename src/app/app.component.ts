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
export class AppComponent implements OnInit {

  title = "ob1";
  posts$ : Observable<any[]>;

  constructor(private dataService : DataService) {}

  ngOnInit() {
    this.posts$ = this.dataService.getPosts();
  }

  //1.	¿Por qué se añade un dólar a la variable posts?
  // Para indicar que la variable es Observable
  //2.	Averigua en que consiste el pipe | async
  /*
    La async tubería se suscribe a un Observableo Promise y devuelve el último
     valor que ha emitido. Cuando se emite un nuevo valor, la async tubería
     marca el componente que se verificará en busca de cambios. Cuando el
     componente se destruye, la asynccanalización se da de baja automáticamente
      para evitar posibles pérdidas de memoria.
      https://angular.io/api/common/AsyncPipe
   */
  //3.	Aparte del método get, que otros métodos se pueden utilizar con observables, y para qué sirven.
  //get, push, pop

}
