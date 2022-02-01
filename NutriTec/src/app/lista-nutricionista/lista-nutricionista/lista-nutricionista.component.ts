import { Nutricionista } from './../nutricionista.model';
import { Component, OnInit } from '@angular/core';
import { ListaNutricionistaService } from '../lista-nutricionista.service';

@Component({
  selector: 'app-lista-nutricionista',
  templateUrl: './lista-nutricionista.component.html',
  styleUrls: ['./lista-nutricionista.component.scss']
})
export class ListaNutricionistaComponent implements OnInit{

  displayedColumns: string[] = ['plano', 'nutricionista', 'especialidade', 'matricula'];

  constructor(private service: ListaNutricionistaService){}

  nutricionistas: Nutricionista[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.nutricionistas = resposta
    })
  }

}





