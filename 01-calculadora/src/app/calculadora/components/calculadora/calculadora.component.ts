import { ChangeDetectionStrategy, Component, computed, inject, viewChildren } from '@angular/core';
import { BotonCalculadoraComponent } from '../boton-calculadora/boton-calculadora.component';
import { CalculadoraService } from '@/calculadora/services/calculadora.service';

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

  private servicioCalculadora = inject(CalculadoraService);

  protected botones = viewChildren(BotonCalculadoraComponent);

  protected textoResultado = computed(() => this.servicioCalculadora.textoResultado());
  protected textoSubresultado = computed(() => this.servicioCalculadora.textoSubresultado());
  protected ultimoOperador = computed(() => this.servicioCalculadora.ultimoOperador());

  // get textoResultado() {
  //   return this.servicioCalculadora.textoResultado();
  // }

  manejarClic(tecla: string) {
    // console.log({ llave });

    this.servicioCalculadora.construirNumero(tecla);
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