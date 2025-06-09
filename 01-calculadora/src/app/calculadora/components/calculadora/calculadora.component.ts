import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
})
export class CalculadoraComponent { }