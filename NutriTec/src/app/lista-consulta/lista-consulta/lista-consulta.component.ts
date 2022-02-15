import { Component} from '@angular/core';


export interface PeriodicElement {
  nutricionista: string;
  plano: string;
  paciente: string;
  data: string;
}

@Component({
  selector: 'app-lista-consulta',
  templateUrl: './lista-consulta.component.html',
  styleUrls: ['./lista-consulta.component.scss']
})
export class ListaConsultaComponent{

  displayedColumns: string[] = ['plano', 'nutricionista', 'paciente', 'data'];
  dataSource = ELEMENT_DATA;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {plano: 'Plano Vida', nutricionista: 'Paulo', paciente: 'Luana', data: '10/11'},
  {plano: 'Plano Vida', nutricionista: 'Joseph', paciente: 'Lucas', data: '10/11'},
  {plano: 'Plano Vida', nutricionista: 'Joseph', paciente: 'Rafael', data: '10/11'},
  {plano: 'Plano Vida', nutricionista: 'Marina', paciente: 'José', data: '10/11'},
  {plano: 'Plano Vida', nutricionista: 'Paloma', paciente: 'Vitória', data: '10/11'},
  {plano: 'Plano Vida', nutricionista: 'Aurora', paciente: 'Maria', data: '10/11'},
  {plano: 'Plano Vida', nutricionista: 'Paulo', paciente: 'Ronaldo', data: '10/11'},
  {plano: 'Plano Vida', nutricionista: 'Joseph', paciente: 'Priscilla', data: '10/11'}
];



