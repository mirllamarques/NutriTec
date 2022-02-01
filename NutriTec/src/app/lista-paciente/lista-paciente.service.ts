import { Paciente } from './lista-paciente.model';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaPacienteService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }


  findAll(): Observable<Paciente[]>{
    const url = `${this.baseUrl}/patients`
    return this.http.get<Paciente[]>(url)
  }
}
