import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { NutricionistaRoutingModule } from './nutricionista-routing.module';
import { NutricionistaComponent } from './nutricionista/nutricionista.component';


@NgModule({
  declarations: [
    NutricionistaComponent
  ],
  imports: [
    CommonModule,
    NutricionistaRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class NutricionistaModule { }
