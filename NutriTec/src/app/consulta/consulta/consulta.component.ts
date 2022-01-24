import { Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


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
export class ConsultaComponent {

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Plano', 'Nome', 'Especialidade'];
  expandedElement: PeriodicElement | null | undefined;

}
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
