import { Injectable, signal } from '@angular/core';

const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operadores = ['+', '-', '*', '/'];
const operadoresEspeciales = ['+/-', '%', '.', '=', 'C', 'Backspace'];

@Injectable({ providedIn: 'root' })
export class CalculadoraService {

  public textoResultado = signal('0');
  public textoSubresultado = signal('0');
  public ultimoOperador = signal('+');

  public construirNumero(valor: string): void {
    // Validar entrada
    if (![...numeros, ...operadores, ...operadoresEspeciales].includes(valor)) {
      console.log('Entrada inválida', valor);
      return;
    }

    // =
    if (valor === '=') {
      // TODO
      console.log('Calcular resultado');
      return;
    }

    // Limpiar resultado
    if (valor === 'C') {
      this.textoResultado.set('0');
      this.textoSubresultado.set('0');
      this.ultimoOperador.set('+');
      return;
    }

    // Backspace
    // TODO: Reviar números negativos
    if (valor === 'Backspace') {
      if (this.textoResultado() === '0') return;

      if (this.textoResultado().length === 1) {
        this.textoResultado.set('0');
        return;
      }

      this.textoResultado.update(valorActual => valorActual.slice(0, -1));
      return;
    }

    // Aplicar operador
    if (operadores.includes(valor)) {
      this.ultimoOperador.set(valor);
      this.textoSubresultado.set(this.textoResultado());
      this.textoResultado.set('0');
      return;
    }

    // Limitar caracteres
    if (this.textoResultado().length >= 10) {
      console.log('Máximo caracteres alcanzado.');
    }

    // Validar decimal
    if (valor === '.' && !this.textoResultado().includes('.')) {
      if (this.textoResultado() === '0' || this.textoResultado() === '') {
        this.textoResultado.set('0.');
        return;
      }

      this.textoResultado.update(valorActual => valorActual + '.');
      return;
    }

    // Manejo 0 inicial
    if (valor === '0' && (this.textoResultado() === '0' || this.textoResultado() === '-0')) {
      return;
    }

    // Cambiar signo
    if (valor == '+/-') {
      if (this.textoResultado().includes('-')) {
        this.textoResultado.update(valorActual => valorActual.slice(1));
        return;
      }

      this.textoResultado.update(valorActual => '-' + valorActual);
      return;
    }

    // Números
    if (numeros.includes(valor)) {
      if (this.textoResultado() === '0') {
        this.textoResultado.set(valor);
        return;
      }

      if (this.textoResultado() === '-0') {
        this.textoResultado.set('-' + valor);
        return;
      }

      this.textoResultado.update(valorActual => valorActual + valor);
      return;
    }
  }

}