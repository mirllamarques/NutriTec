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
  {plano: 'Plano Vida', paciente: 'Hydrogen'},
  {plano: 'Plano Vida', paciente: 'Helium'},
  {plano: 'Plano Vida', paciente: 'Lithium'},
  {plano: 'Plano Vida', paciente: 'Beryllium'},
  {plano: 'Plano Vida', paciente: 'Boron'}
];
