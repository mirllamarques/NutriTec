import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardsService {

  constructor(private http: HttpClient) { }

  baseUrl: String = environment.baseUrl

  getAll(): Observable<number[]>{
    const url = `${this.baseUrl}/consultas/nutritionistCount`
    return this.http.get<number[]>(url)

  }
}
