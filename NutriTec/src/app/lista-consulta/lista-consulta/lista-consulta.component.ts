import { Nutricionista } from './../../lista-nutricionista/nutricionista.model';
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
  nutricionistas: Nutricionista[] = []

  healthPlan: String = ''

  findAll(): void{

  }
}




