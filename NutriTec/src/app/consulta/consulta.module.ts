import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ConsultaService } from './consulta.service';
import { FormsModule } from '@angular/forms';

import { ConsultaRoutingModule } from './consulta-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';


@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers:
  [
    ConsultaService
  ]
})
export class ConsultaModule { }
