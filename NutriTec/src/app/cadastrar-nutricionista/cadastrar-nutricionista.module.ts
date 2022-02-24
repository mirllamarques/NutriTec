import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {Component} from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { CadastrarNutricionistaRoutingModule } from './cadastrar-nutricionista-routing.module';
import { CadastrarNutricionistaComponent } from './cadastrar-nutricionista/cadastrar-nutricionista.component';


@NgModule({
  declarations: [
    CadastrarNutricionistaComponent
  ],
  imports: [
    CommonModule,
    CadastrarNutricionistaRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class CadastrarNutricionistaModule { }
