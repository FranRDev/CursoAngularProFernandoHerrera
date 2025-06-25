import { TestBed } from "@angular/core/testing";

import { CalculadoraService } from "./calculadora.service";

describe('CalculadoraService', () => {
  let servicio: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    servicio = TestBed.inject(CalculadoraService);
  });

  it('debería ser creado', () => {
    expect(servicio).toBeTruthy();
  });

  it('debería crearse con valores por defecto', () => {
    expect(servicio.textoResultado()).toBe('0');
    expect(servicio.textoSubresultado()).toBe('0');
    expect(servicio.ultimoOperador()).toBe('+');
  });
});