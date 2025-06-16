import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BotonCalculadoraComponent } from '../boton-calculadora/boton-calculadora.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    console.log(llave);
  }

}