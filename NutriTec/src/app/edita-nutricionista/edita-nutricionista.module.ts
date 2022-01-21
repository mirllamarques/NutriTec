import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { EditaNutricionistaRoutingModule } from './edita-nutricionista-routing.module';
import { EditaNutricionistaComponent } from './edita-nutricionista/edita-nutricionista.component';


@NgModule({
  declarations: [
    EditaNutricionistaComponent
  ],
  imports: [
    CommonModule,
    EditaNutricionistaRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
export class EditaNutricionistaModule { }
