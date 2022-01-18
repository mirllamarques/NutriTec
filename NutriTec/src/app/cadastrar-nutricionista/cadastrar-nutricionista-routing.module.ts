import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarNutricionistaComponent } from './cadastrar-nutricionista/cadastrar-nutricionista.component';
const routes: Routes = [
  {
    path: '', component: CadastrarNutricionistaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrarNutricionistaRoutingModule { }
