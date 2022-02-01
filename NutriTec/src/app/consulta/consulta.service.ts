import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consulta } from './consulta.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient) { }

  criar(consulta: Consulta): Observable<Consulta>{

    const url = `${this.baseUrl}/consultas`
    return this.http.post<Consulta>(url, consulta);


  }

  findAll(): Observable<Consulta[]>{
    const url = `${this.baseUrl}/consultas`
    return  this.http.get<Consulta[]>(url);
  }

}
