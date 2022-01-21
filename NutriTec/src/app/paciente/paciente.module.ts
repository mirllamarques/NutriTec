import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './paciente/paciente.component';


@NgModule({
  declarations: [
    PacienteComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class PacienteModule { }
