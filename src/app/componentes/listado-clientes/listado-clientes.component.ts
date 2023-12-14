import { Component } from '@angular/core';
import {Cliente, Grupo} from "../../cliente.model";
import {ClientesService} from "../../service/clientes.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-listado-clientes',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {
  clientes : Cliente[] = []
  constructor(private clienteService : ClientesService) {}
  ngOnInit(){
    this.clientes = this.clienteService.getClientes();
  }
}
