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

  it('debería actualizarse resultado con el número introducido', () => {
    servicio.construirNumero('1');
    expect(servicio.textoResultado()).toBe('1');

    servicio.construirNumero('2');
    expect(servicio.textoResultado()).toBe('12');
  });

  it('debería manejar los operadores correctamente', () => {
    servicio.construirNumero('1');
    servicio.construirNumero('-');

    expect(servicio.ultimoOperador()).toBe('-');
    expect(servicio.textoSubresultado()).toBe('1');
    expect(servicio.textoResultado()).toBe('0');
  });

  it('debería calcular el resultado correctamente en la suma', () => {
    servicio.construirNumero('1');
    servicio.construirNumero('+');
    servicio.construirNumero('2');
    servicio.construirNumero('=');

    expect(servicio.textoResultado()).toBe('3');
  });

  it('debería calcular el resultado correctamente en la resta', () => {
    servicio.construirNumero('5');
    servicio.construirNumero('-');
    servicio.construirNumero('2');
    servicio.construirNumero('=');

    expect(servicio.textoResultado()).toBe('3');
  });

  it('debería calcular el resultado correctamente en la multiplicación', () => {
    servicio.construirNumero('5');
    servicio.construirNumero('*');
    servicio.construirNumero('5');
    servicio.construirNumero('=');

    expect(servicio.textoResultado()).toBe('25');
  });

  it('debería calcular el resultado correctamente en la división', () => {
    servicio.construirNumero('6');
    servicio.construirNumero('0');
    servicio.construirNumero('÷');
    servicio.construirNumero('1');
    servicio.construirNumero('0');
    servicio.construirNumero('=');

    expect(servicio.textoResultado()).toBe('6');
  });

  it('debería manejar el decimal correctamente', () => {
    servicio.construirNumero('1');
    servicio.construirNumero('.');
    servicio.construirNumero('5');

    expect(servicio.textoResultado()).toBe('1.5');

    servicio.construirNumero('.');

    expect(servicio.textoResultado()).toBe('1.5');
  });

  it('debería manejar el decimal correctamente empezando con 0', () => {
    servicio.construirNumero('0');
    servicio.construirNumero('.');
    servicio.construirNumero('.');
    servicio.construirNumero('.');
    servicio.construirNumero('.');
    servicio.construirNumero('0');

    expect(servicio.textoResultado()).toBe('0.0');
  });

  // it('', () => {

  // });

  // it('', () => {

  // });

  // it('', () => {

  // });
});