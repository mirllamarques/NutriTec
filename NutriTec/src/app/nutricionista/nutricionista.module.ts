import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


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
    MatButtonModule,
    MatDialogModule
  ]
})
export class NutricionistaModule { }
