import { Router } from '@angular/router';
import { Nutricionista } from './../../lista-nutricionista/nutricionista.model';
import { CadastrarNutricionistaService } from './../cadastrar-nutricionista.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-nutricionista',
  templateUrl: './cadastrar-nutricionista.component.html',
  styleUrls: ['./cadastrar-nutricionista.component.scss']
})
export class CadastrarNutricionistaComponent implements OnInit {

  nutricionista: Nutricionista = {
    healthPlan: '',
    name: '',
    speciality: '',
    registration: ''
  };

  constructor(private service: CadastrarNutricionistaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.nutricionista).subscribe((resposta ) =>{
      this.router.navigate(['cadastrado'])
      this.service.mensagem('Nutricionista cadastrado com sucesso!');

    },
    err=> {
      for (let index = 0; index < err.error.errors.lenght; index++) {

        this.service.mensagem(err.error.errors[index].message)


      }
    }
    )
  }

}
