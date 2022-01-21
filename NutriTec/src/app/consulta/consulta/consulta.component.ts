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
  columnsToDisplay = ['plano', 'nome', 'especialidade'];
  expandedElement: PeriodicElement | null | undefined;

}
export interface PeriodicElement {
  plano: string;
  nome: string;
  especialidade: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    plano: '1',
    nome: 'Hydrogen',
    especialidade: '1.0079',

  },
  {
    plano: '2',
    nome: 'Helium',
    especialidade: '0026',

  },
  {
    plano: '3',
    nome: 'Lithium',
    especialidade: '6.941',

  },
  {
    plano: '4',
    nome: 'Beryllium',
    especialidade: '9.0122',
  },
  {
    plano: '5',
    nome: 'Boron',
    especialidade: '10.811',
    },
  {
    plano: '6',
    nome: 'Carbon',
    especialidade: '12.0107',
  },
  {
    plano: '7',
    nome: 'Nitrogen',
    especialidade: '14.0067',
  },
  {
    plano: '8',
    nome: 'Oxygen',
    especialidade: '15.9994',
  },
  {
    plano: '9',
    nome: 'Fluorine',
    especialidade: '18.9984',
  },
  {
    plano: '10',
    nome: 'Neon',
    especialidade: '20.1797',
  },
];
