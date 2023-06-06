import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiCalcService } from '../api-calc.service';
import { BuscaNomeResponse } from '../interfaces/busca-nome.response';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
})
export class ConsultaComponent {
  response$: Observable<BuscaNomeResponse> = new Observable<BuscaNomeResponse>();

  formGroupConsulta = new FormGroup({
    num: new FormControl<number>(0),
  });

  constructor(private apiService: ApiCalcService) {}

  buscar(): void {
    this.response$ = this.apiService.buscar(
      this.formGroupConsulta.controls.num.value!
    );
  }
}

