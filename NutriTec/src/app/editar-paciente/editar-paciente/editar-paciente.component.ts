import { Paciente } from './../../lista-paciente/lista-paciente.model';
import { Router } from '@angular/router';
import { EditarPacienteService } from './../editar-paciente.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.scss']
})
export class EditarPacienteComponent implements OnInit {

  paciente: Paciente = {

    cpf: '',
    name: '',
    age: undefined,
    weight: undefined,
    height: undefined,
    healthPlan: ''

  }

  constructor(private service: EditarPacienteService, private router: Router) { }

  ngOnInit(): void {
  }

  update(): void{
    this.service.update(this.paciente).subscribe((resposta ) =>{
      this.router.navigate(['cadastrado'])
    }
    )
  }

}
