import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuscaNomeResponse } from './interfaces/busca-nome.response';

@Injectable({
  providedIn: 'root',
})
export class ApiCalcService {
  urlBase = `https://localhost:7043/api`;

  constructor(private http: HttpClient) {}

  postMultiply(Valor: number, Parcelas: number) {
    return this.http.post<number>(`${this.urlBase}/values/api/math/multiply`, {
      Valor,
      Parcelas,
    });
  }

  buscar(num: number) {
    return this.http.get<BuscaNomeResponse>(`${this.urlBase}/names/${num}`);
  }
}
