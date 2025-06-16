import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, input, output, signal, viewChild, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None,
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

  public presionado = signal(false);

  public enClic = output<string>();
  public valorContenido = viewChild<ElementRef<HTMLButtonElement>>('boton');

  public comando = input(false, { transform: (valor: boolean | string) => typeof valor === 'string' ? valor === '' : valor });
  public doble = input(false, { transform: (valor: boolean | string) => typeof valor === 'string' ? valor === '' : valor });

  // @HostBinding('class.comando') get estiloComando() {
  //   return this.comando();
  // }

  @HostBinding('class.w-2/4') get estiloComando() {
    return this.doble();
  }

  manejarClic() {
    if (!this.valorContenido()?.nativeElement) { return; }
    const valor = this.valorContenido()!.nativeElement.innerText;
    this.enClic.emit(valor.trim());
  }

  public estiloTecladoPresionado(tecla: string) {
    if (!this.valorContenido()) return;
    const valor = this.valorContenido()?.nativeElement.innerText;

    if (valor !== tecla) return;
    this.presionado.set(true);

    setTimeout(() => {
      this.presionado.set(false);
    }, 100);
  }

}