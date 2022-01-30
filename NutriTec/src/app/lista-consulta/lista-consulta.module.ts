import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import { ListaConsultaRoutingModule } from './lista-consulta-routing.module';
import { ListaConsultaComponent } from './lista-consulta/lista-consulta.component';


@NgModule({
  declarations: [
    ListaConsultaComponent
  ],
  imports: [
    CommonModule,
    ListaConsultaRoutingModule,
    MatFormFieldModule,
    MatTableModule
  ]
})
export class ListaConsultaModule { }
