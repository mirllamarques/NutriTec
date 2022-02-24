import { Router } from '@angular/router';
import { Nutricionista } from './../../lista-nutricionista/nutricionista.model';
import { CadastrarNutricionistaService } from './../cadastrar-nutricionista.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-nutricionista',
  templateUrl: './cadastrar-nutricionista.component.html',
  styleUrls: ['./cadastrar-nutricionista.component.scss']
})
export class CadastrarNutricionistaComponent implements OnInit {

  nutricionista: Nutricionista = {
    healthPlan: [],
    name: '',
    speciality: '',
    registration: ''
  }

  constructor(private service: CadastrarNutricionistaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.nutricionista).subscribe((resposta ) =>{
      this.router.navigate(['cadastrado'])
    }
    )
  }

  toppings = new FormControl();
  toppingList: string[] = ['Plano Vida', 'Hap Saúde', 'Ut Mais'];



}
