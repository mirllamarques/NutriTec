import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Nutricionista } from './../lista-nutricionista/nutricionista.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaConsultaService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient) { }

  findAllByHealthPlan(id: String): Observable<Nutricionista[]>{
    const url = `${this.baseUrl}/nutritionists/healthplan/${id}`

    return this.http.get<Nutricionista[]>(url)

  }
}
