import { TestBed } from "@angular/core/testing";

import { CalculadoraService } from "./calculadora.service";

describe('CalculadoraService', () => {
  let servicio: CalculadoraService;

  beforeEach(() => { // Antes de cada prueba.
    TestBed.configureTestingModule({});
    servicio = TestBed.inject(CalculadoraService);
  });

  beforeAll(() => {}); // Antes de todas las pruebas.
  afterEach(() => {}); // Después de cada prueba.
  afterAll(() => {}); // Después de todas las pruebas.

  it('debería ser creado', () => {
    expect(servicio).toBeTruthy();
  });

  it('debería crearse con valores por defecto', () => {
    expect(servicio.textoResultado()).toBe('0');
    expect(servicio.textoSubresultado()).toBe('0');
    expect(servicio.ultimoOperador()).toBe('+');
  });

  it('debería establecerse resultado y subresultado a 0 presionando C', () => {
    servicio.textoResultado.set('123');
    servicio.textoSubresultado.set('456');
    servicio.ultimoOperador.set('*');

    servicio.construirNumero('C');

    expect(servicio.textoResultado()).toBe('0');
    expect(servicio.textoSubresultado()).toBe('0');
    expect(servicio.ultimoOperador()).toBe('+');
  });
});