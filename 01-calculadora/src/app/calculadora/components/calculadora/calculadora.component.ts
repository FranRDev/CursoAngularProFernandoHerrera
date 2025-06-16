import { ChangeDetectionStrategy, Component, viewChildren } from '@angular/core';
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

  public botones = viewChildren(BotonCalculadoraComponent);

  manejarClic(llave: string) {
    console.log({ llave });
  }

  // @HostListener('document:keyup', ['$event'])
  manejarEventoTeclado(evento: KeyboardEvent) {
    const tecla = evento.key;

    const equivalencias: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      '*': 'x',
      '/': '÷',
      Enter: '='
    }

    const valorTecla = equivalencias[tecla] ?? tecla;

    this.manejarClic(valorTecla);

    this.botones().forEach(boton => {
      boton.estiloTecladoPresionado(valorTecla);
    });
  }

}