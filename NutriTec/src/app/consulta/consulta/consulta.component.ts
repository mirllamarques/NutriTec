import { ConsultaService } from './../consulta.service';
import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import {FormGroup, NgForm } from '@angular/forms';


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

  consultas:Array<any>;
  consulta: any;

  constructor(public dialog: MatDialog, private service: ConsultaService) {}

  ngOnInit(){
    this.consulta = {};
  }

  criar(frm: NgForm){
    this.service.criar(this.consulta).subscribe(resposta => {
      this.consulta.push(resposta);
      frm.reset();

    })
  }

  openDialog() {
    this.dialog.open(DialogElemento);
  }

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Plano', 'Nome', 'Especialidade'];
  expandedElement: PeriodicElement | null | undefined;

}

@Component({
  selector: 'dialog-elemento',
  templateUrl: './dialog-elemento.html',
})
export class DialogElemento {}

export interface PeriodicElement {
  Plano: string;
  Nome: string;
  Especialidade: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    Plano: 'Plano Vida',
    Nome: 'Hydrogen',
    Especialidade: 'Desporto',

  },
  {
    Plano: 'Plano Vida',
    Nome: 'Helium',
    Especialidade: 'Nutrologo',

  },
  {
    Plano: 'Plano Vida',
    Nome: 'Lithium',
    Especialidade: 'Dietas com foco em ganho de massa',

  },
  {
    Plano: 'Plano Vida',
    Nome: 'Beryllium',
    Especialidade: 'Dietas para redução de gordura',
  },
  {
    Plano: 'Plano Vida',
    Nome: 'Boron',
    Especialidade: 'Dietas para redução de açúcar',
    },
  {
    Plano: 'Plano Vida',
    Nome: 'Carbon',
    Especialidade: 'Geral',
  }
];
