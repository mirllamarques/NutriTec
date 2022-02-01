import { Consulta } from './../consulta.model';
import { ConsultaService } from './../consulta.service';
import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { Router} from '@angular/router';



@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class ConsultaComponent implements OnInit{

  ngOnInit(){

  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElemento);
  }

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Plano','Matricula', 'Nome', 'Especialidade'];
  expandedElement: PeriodicElement | null | undefined;

}

@Component({
  selector: 'dialog-elemento',
  templateUrl: './dialog-elemento.html',
})
export class DialogElemento {}

export interface PeriodicElement {
  Plano: string;
  Matricula: string;
  Nome: string;
  Especialidade: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    Plano: 'Plano Vida',
    Matricula: '1234567',
    Nome: 'Hydrogen',
    Especialidade: 'Desporto',


  },
  {
    Plano: 'Plano Vida',
    Matricula: '1234561',
    Nome: 'Helium',
    Especialidade: 'Nutrologo',

  },
  {
    Plano: 'Plano Vida',
    Matricula: '1234562',
    Nome: 'Lithium',
    Especialidade: 'Dietas com foco em ganho de massa',

  },
  {
    Plano: 'Plano Vida',
    Matricula: '1234563',
    Nome: 'Beryllium',
    Especialidade: 'Dietas para redução de gordura',
  },
  {
    Plano: 'Plano Vida',
    Matricula: '1234564',
    Nome: 'Boron',
    Especialidade: 'Dietas para redução de açúcar',
    },
  {
    Plano: 'Plano Vida',
    Matricula: '1234565',
    Nome: 'Carbon',
    Especialidade: 'Geral',
  }
];
