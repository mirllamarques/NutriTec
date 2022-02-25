import { Router } from '@angular/router';
import { CadastrarPacienteService } from './../cadastrar-paciente.service';
import { Paciente } from './../../lista-paciente/lista-paciente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.scss']
})


export class CadastrarPacienteComponent{

  paciente: Paciente = {

    cpf: '',
    name: '',
    age: undefined,
    weight: undefined,
    height: undefined,
    healthPlan: ''

  }

  constructor(private service: CadastrarPacienteService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.paciente).subscribe((resposta ) =>{
      this.router.navigate(['cadastrado'])
    }
    )
  }

}
