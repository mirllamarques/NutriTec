import { environment } from './../../environments/environment';
import { Nutricionista } from './nutricionista.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaNutricionistaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Nutricionista[]>{
    const url = `${this.baseUrl}/nutritionists`
    return this.http.get<Nutricionista[]>(url)
  }
}
