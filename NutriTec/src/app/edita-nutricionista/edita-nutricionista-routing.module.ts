import { EditaNutricionistaComponent } from './edita-nutricionista/edita-nutricionista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: EditaNutricionistaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditaNutricionistaRoutingModule { }
