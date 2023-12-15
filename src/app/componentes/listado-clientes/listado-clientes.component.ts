import { Component } from '@angular/core';
import {Cliente, Grupo} from "../../cliente.model";
import {ClientesService} from "../../service/clientes.service";
import {NgForOf, NgIf} from "@angular/common";
import {empty, isEmpty} from "rxjs";

@Component({
  selector: 'app-listado-clientes',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {
  clientes : Cliente[] = []
  constructor(private clienteService : ClientesService) {}
  ngOnInit(){
    this.clienteService.getClientes()
      .subscribe( clientes =>
        this.clientes = clientes
      )
  }
}
