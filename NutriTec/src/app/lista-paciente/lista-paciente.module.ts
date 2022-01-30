import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import { ListaPacienteRoutingModule } from './lista-paciente-routing.module';
import { ListaPacienteComponent } from './lista-paciente/lista-paciente.component';


@NgModule({
  declarations: [
    ListaPacienteComponent
  ],
  imports: [
    CommonModule,
    ListaPacienteRoutingModule,
    MatFormFieldModule,
    MatTableModule
  ]
})
export class ListaPacienteModule { }
