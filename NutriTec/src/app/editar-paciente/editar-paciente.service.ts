import { Observable } from 'rxjs';
import { Paciente } from './../lista-paciente/lista-paciente.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditarPacienteService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) {}


  update(paciente: Paciente): Observable<Paciente>{
    const url = `${this.baseUrl}/patients`

    return this.http.put<Paciente>(url, paciente);

  }

}
