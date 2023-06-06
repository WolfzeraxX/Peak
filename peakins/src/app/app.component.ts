import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiCalcService } from './api-calc.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  result: Observable<number> = new Observable<number>();

  formGroup = new FormGroup({
    inputA: new FormControl<number>(0),
    inputB: new FormControl<number>(0),

  });

  constructor(private apiService: ApiCalcService , ) {

  }

  clickHandler() {
    const { inputA, inputB } = this.formGroup.value;
    this.result = this.apiService.postMultiply(inputA!, inputB!);
  }}

