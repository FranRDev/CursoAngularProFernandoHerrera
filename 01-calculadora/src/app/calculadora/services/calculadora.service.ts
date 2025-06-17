import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CalculadoraService {

  public textoResultado = signal('0');
  public textoSubresultado = signal('0');
  public ultimoOperador = signal('+');

}