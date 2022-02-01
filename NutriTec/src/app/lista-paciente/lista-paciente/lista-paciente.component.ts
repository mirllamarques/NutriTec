import { ListaPacienteService } from './../lista-paciente.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from '../lista-paciente.model';
export interface PeriodicElement {
  paciente: string;
  plano: string;
}


@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.scss']
})
export class ListaPacienteComponent implements OnInit{

  displayedColumns: string[] = ['plano', 'paciente', 'cpf'];

  constructor(private service: ListaPacienteService){}

  pacientes: Paciente[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.pacientes = resposta
    })

  }
}
