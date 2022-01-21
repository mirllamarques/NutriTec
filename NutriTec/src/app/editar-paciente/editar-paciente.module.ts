import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';


import { EditarPacienteRoutingModule } from './editar-paciente-routing.module';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';


@NgModule({
  declarations: [
    EditarPacienteComponent
  ],
  imports: [
    CommonModule,
    EditarPacienteRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule
  ]
})
export class EditarPacienteModule { }
