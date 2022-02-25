import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './../lista-paciente/lista-paciente.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastrarPacienteService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) {}


  create(paciente: Paciente): Observable<Paciente>{
    const url = `${this.baseUrl}/patients`

    return this.http.post<Paciente>(url, paciente);

  }

}
