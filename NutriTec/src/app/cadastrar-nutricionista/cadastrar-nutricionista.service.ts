import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Nutricionista } from '../lista-nutricionista/nutricionista.model';

@Injectable({
  providedIn: 'root'
})
export class CadastrarNutricionistaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) {}

  create(nutricionista: Nutricionista): Observable<Nutricionista>{
    const url = `${this.baseUrl}/nutritionist`

    return this.http.post<Nutricionista>(url, nutricionista);

  }

}
