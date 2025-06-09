import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BotonCalculadoraComponent } from '../boton-calculadora/boton-calculadora.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BotonCalculadoraComponent],
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
})
export class CalculadoraComponent { }