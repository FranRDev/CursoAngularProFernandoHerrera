import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
    // attribute: 'hola',
    // 'data-size': 'XL'
  },
  imports: [],
  selector: 'boton-calculadora',
  styleUrl: './boton-calculadora.component.css',
  templateUrl: './boton-calculadora.component.html'
})
export class BotonCalculadoraComponent {

  public comando = input(false, { transform: (valor: boolean | string) => typeof valor === 'string' ? valor === '' : valor });

  @HostBinding('class.comando') get estiloComando() {
    return this.comando();
  }

}