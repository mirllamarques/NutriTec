import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Nutricionista } from '../lista-nutricionista/nutricionista.model';

@Injectable({
  providedIn: 'root'
})
export class EditaNutricionistaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) {}


  update(nutricionista: Nutricionista): Observable<Nutricionista>{
    const url = `${this.baseUrl}/nutritionists`

    return this.http.put<Nutricionista>(url, nutricionista);

  }
}
