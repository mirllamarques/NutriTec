import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import { ListaNutricionistaRoutingModule } from './lista-nutricionista-routing.module';
import { ListaNutricionistaComponent } from './lista-nutricionista/lista-nutricionista.component';


@NgModule({
  declarations: [
    ListaNutricionistaComponent
  ],
  imports: [
    CommonModule,
    ListaNutricionistaRoutingModule,
    MatFormFieldModule,
    MatTableModule
  ]
})
export class ListaNutricionistaModule { }
