import { Injectable } from '@angular/core';
import {Cliente, Grupo} from "../cliente.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  grupos : Grupo[] = [
    {id: 0, nombre: 'Sin definir'},
    {id: 1, nombre: 'Activos'},
    {id: 2, nombre: 'Inactivos'},
    {id: 3, nombre: 'Deudores'}
  ];
  clientes : Cliente[] = [];
  constructor() {}

  getClientes () : Observable<Cliente[]>{
    return of(this.clientes);
  }

  getGrupos() {
    return this.grupos
  }

  addClientes (cliente : Cliente) {
    this.clientes.push(cliente)
  }

}
