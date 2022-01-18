import { HomeComponent } from './home/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },{
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
  },{
    path: 'areaNutricionista',
    loadChildren: ()=> import('./nutricionista/nutricionista.module').then(m => m.NutricionistaModule)
  },{
    path: 'cadastrarNutricionista',
    loadChildren: ()=> import('./cadastrar-nutricionista/cadastrar-nutricionista.module').then(m => m.CadastrarNutricionistaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
