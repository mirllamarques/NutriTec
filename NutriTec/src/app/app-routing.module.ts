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
    path: 'area-nutricionista',
    loadChildren: ()=> import('./nutricionista/nutricionista.module').then(m => m.NutricionistaModule)
  },{
    path: 'cadastrar-nutricionista',
    loadChildren: ()=> import('./cadastrar-nutricionista/cadastrar-nutricionista.module').then(m => m.CadastrarNutricionistaModule)
  },{
    path: 'edita-nutricionista',
    loadChildren: ()=> import('./edita-nutricionista/edita-nutricionista.module').then(m => m.EditaNutricionistaModule)
  },{
    path: 'area-paciente',
    loadChildren: ()=> import('./paciente/paciente.module').then(m => m.PacienteModule)
  },{
    path: 'cadastrar-paciente',
    loadChildren: ()=> import('./cadastrar-paciente/cadastrar-paciente.module').then(m => m.CadastrarPacienteModule)
  },{
    path: 'editar-paciente',
    loadChildren: ()=> import('./editar-paciente/editar-paciente.module').then(m => m.EditarPacienteModule)
  },{
    path: 'consulta',
    loadChildren: ()=> import('./consulta/consulta.module').then(m => m.ConsultaModule)
  },{
    path: 'agendada',
    loadChildren: ()=> import('./agendada/agendada.module').then(m => m.AgendadaModule)
  },{
    path: 'dashboards',
    loadChildren: ()=> import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
  },{
    path: 'falha',
    loadChildren: ()=> import('./falha/falha.module').then(m => m.FalhaModule)
  },{
    path: 'cadastrado',
    loadChildren: ()=> import('./cadastro/cadastro.module').then(m => m.CadastroModule)
  },{
    path: 'lista-nutricionista',
    loadChildren: ()=> import('./lista-nutricionista/lista-nutricionista.module').then(m => m.ListaNutricionistaModule)
  },{
    path: 'lista-paciente',
    loadChildren: ()=> import('./lista-paciente/lista-paciente.module').then(m => m.ListaPacienteModule)
  },{
    path: 'lista-consulta',
    loadChildren: ()=> import('./lista-consulta/lista-consulta.module').then(m => m.ListaConsultaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
