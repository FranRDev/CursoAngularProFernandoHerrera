import { CalculadoraComponent } from '@/calculadora/components/calculadora/calculadora.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CalculadoraComponent],
  selector: 'vista-calculadora',
  templateUrl: './vista-calculadora.component.html',
})
export default class VistaCalculadoraComponent { }