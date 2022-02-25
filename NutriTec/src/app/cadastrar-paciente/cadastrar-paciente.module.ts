import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CadastrarPacienteRoutingModule } from './cadastrar-paciente-routing.module';
import { CadastrarPacienteComponent } from './cadastrar-paciente/cadastrar-paciente.component';


@NgModule({
  declarations: [
    CadastrarPacienteComponent
  ],
  imports: [
    CommonModule,
    CadastrarPacienteRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastrarPacienteModule { }
