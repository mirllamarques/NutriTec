import { Component} from '@angular/core';


export interface PeriodicElement {
  nutricionista: string;
  plano: string;
  paciente: string;
  data: string;
  hora: string;
}

@Component({
  selector: 'app-lista-consulta',
  templateUrl: './lista-consulta.component.html',
  styleUrls: ['./lista-consulta.component.scss']
})
export class ListaConsultaComponent{

  displayedColumns: string[] = ['plano', 'nutricionista', 'paciente', 'data', 'hora'];
  dataSource = ELEMENT_DATA;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {plano: '1', nutricionista: 'Hydrogen', paciente: '1.0079', data: '10/11', hora: '10:00'},
  {plano: '2', nutricionista: 'Helium', paciente: '4.0026', data: '10/11', hora: '10:00'},
  {plano: '3', nutricionista: 'Lithium', paciente: '6.941', data: '10/11', hora: '10:00'},
  {plano: '4', nutricionista: 'Beryllium', paciente: '9.0122', data: '10/11', hora: '10:00'},
  {plano: '5', nutricionista: 'Boron', paciente: '10.811', data: '10/11', hora: '10:00'},
  {plano: '6', nutricionista: 'Carbon', paciente: '12.0107', data: '10/11', hora: '10:00'},
  {plano: '7', nutricionista: 'Nitrogen', paciente: '14.0067', data: '10/11', hora: '10:00'},
  {plano: '8', nutricionista: 'Oxygen', paciente: '15.9994', data: '10/11', hora: '10:00'},
  {plano: '9', nutricionista: 'Fluorine', paciente: '18.9984', data: '10/11', hora: '10:00'},
  {plano: '10', nutricionista: 'Neon', paciente: '20.1797', data: '10/11', hora: '10:00'},
];



