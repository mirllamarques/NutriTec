import { EditaNutricionistaService } from './../edita-nutricionista.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Nutricionista } from 'src/app/lista-nutricionista/nutricionista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edita-nutricionista',
  templateUrl: './edita-nutricionista.component.html',
  styleUrls: ['./edita-nutricionista.component.scss']
})
export class EditaNutricionistaComponent implements OnInit {

  nutricionista: Nutricionista = {
    healthPlan: [],
    name: '',
    speciality: '',
    age: undefined,
    registration: ''

  }

  constructor(private service: EditaNutricionistaService, private router: Router) { }


  ngOnInit(): void {
  }

  update(): void{
    this.service.update(this.nutricionista).subscribe((resposta ) =>{
      this.router.navigate(['cadastrado'])
    }
    )
  }

  toppings = new FormControl();
  toppingList: string[] = ['Plano Vida', 'Hap Saúde', 'Ut Mais'];
}
