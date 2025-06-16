import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BotonCalculadoraComponent } from '../boton-calculadora/boton-calculadora.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'manejarEventoTeclado($event)'
  },
  imports: [BotonCalculadoraComponent],
  selector: 'calculadora',
  // styles: `
  //   @reference "tailwindcss";

  //   .comando {
  //     @apply bg-indigo-700/20;
  //   }
  // `,
  templateUrl: './calculadora.component.html',
})
export class CalculadoraComponent {

  manejarClic(llave: string) {
    console.log({ llave });
  }

  // @HostListener('document:keyup', ['$event'])
  manejarEventoTeclado(evento: KeyboardEvent) {
    this.manejarClic(evento.key);
  }

}