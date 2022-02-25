import { Nutricionista } from './../../lista-nutricionista/nutricionista.model';
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

  displayedColumns: string[] = ['plano', 'nutricionista', 'paciente', 'data'];
  nutricionistas: Nutricionista[] = []

  healthPlan: String = ''

  findAll(): void{

  }
  
  dataSource = this.nutricionistas;
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

;
