import {Component, OnInit} from '@angular/core';
import {ClientesService} from "../../service/clientes.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Cliente, Grupo} from "../../cliente.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cliente-alta',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgForOf
  ],
  templateUrl: './cliente-alta.component.html',
  styleUrl: './cliente-alta.component.css'
})
export class ClienteAltaComponent implements OnInit{

  nombre = "";
  cif = "";
  direccion = "";
  grupo = 0;
  grupos : Grupo[] = [];

  constructor(private clienteService : ClientesService) {}

  guardar (){
    this.clienteService.addClientes({id: 1, nombre: this.nombre, cif: this.cif, direccion: this.direccion, grupo : this.grupo})
    this.clear()
  }
  clear (){
    this.nombre = "";
    this.cif = "";
    this.direccion = "";
    this.grupo = 0;
  }

  ngOnInit(){
    this.grupos = this.clienteService.getGrupos()
  }

}
