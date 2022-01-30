import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  plano: string;
  nutricionista: string;
  especialidade: string;
}

@Component({
  selector: 'app-lista-nutricionista',
  templateUrl: './lista-nutricionista.component.html',
  styleUrls: ['./lista-nutricionista.component.scss']
})
export class ListaNutricionistaComponent{

  displayedColumns: string[] = ['plano', 'nutricionista', 'especialidade'];
  dataSource = ELEMENT_DATA;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {plano: 'Hydrogen', nutricionista: '1.0079', especialidade: 'H'},
  { plano: 'Helium', nutricionista: '4.0026', especialidade: 'He'},
  {plano: 'Lithium', nutricionista: '6.941', especialidade: 'Li'},
  { plano: 'Beryllium', nutricionista: '9.0122', especialidade: 'Be'},
  { plano: 'Boron', nutricionista: '10.811', especialidade: 'B'},
  { plano: 'Carbon', nutricionista: '12.0107', especialidade: 'C'},
  { plano: 'Nitrogen', nutricionista: '14.006', especialidade: 'N'},
  { plano: 'Oxygen', nutricionista: '15.9994', especialidade: 'O'},
  {plano: 'Fluorine', nutricionista: '18.9984', especialidade: 'F'},
  { plano: 'Neon', nutricionista: '20.1797', especialidade: 'Ne'},
];



