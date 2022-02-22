import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Nutricionista } from '../lista-nutricionista/nutricionista.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CadastrarNutricionistaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  create(nutricionista: Nutricionista): Observable<Nutricionista>{
    const url = `${this.baseUrl}/nutritionist`

    return this.http.post<Nutricionista>(url, nutricionista);

  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'Ok', {
      horizontalPosition: 'end', verticalPosition: 'bottom', duration: 3000
    });
  }

}
