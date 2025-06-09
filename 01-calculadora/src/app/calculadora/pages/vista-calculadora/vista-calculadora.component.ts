import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'vista-calculadora',
  templateUrl: './vista-calculadora.component.html',
})
export default class VistaCalculadoraComponent { }