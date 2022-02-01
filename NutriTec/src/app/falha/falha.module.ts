import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FalhaRoutingModule } from './falha-routing.module';
import { FalhaComponent } from './falha/falha.component';


@NgModule({
  declarations: [
    FalhaComponent
  ],
  imports: [
    CommonModule,
    FalhaRoutingModule
  ]
})
export class FalhaModule { }
