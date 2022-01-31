import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  consultasUrl = 'http://localhost:8080/consultas';
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Array<any>>(this.consultasUrl);
  }

  criar(consulta: any){
    return this.http.post(this.consultasUrl, consulta);
  }
}
