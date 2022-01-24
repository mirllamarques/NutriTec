import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendadaRoutingModule } from './agendada-routing.module';
import { AgendadaComponent } from './agendada/agendada.component';


@NgModule({
  declarations: [
    AgendadaComponent
  ],
  imports: [
    CommonModule,
    AgendadaRoutingModule
  ]
})
export class AgendadaModule { }
