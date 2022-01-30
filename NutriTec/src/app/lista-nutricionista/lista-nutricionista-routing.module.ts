import { ListaNutricionistaComponent } from './lista-nutricionista/lista-nutricionista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ListaNutricionistaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaNutricionistaRoutingModule { }
