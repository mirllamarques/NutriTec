import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  paciente: string;
  plano: string;
}


@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.scss']
})
export class ListaPacienteComponent {

  displayedColumns: string[] = ['plano', 'paciente'];
  dataSource = ELEMENT_DATA;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {plano: '1', paciente: 'Hydrogen'},
  {plano: '2', paciente: 'Helium'},
  {plano: '3', paciente: 'Lithium'},
  {plano: '4', paciente: 'Beryllium'},
  {plano: '5', paciente: 'Boron'}
];
