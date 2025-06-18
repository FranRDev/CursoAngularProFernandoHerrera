import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('debería crear la app', () => expect(app).toBeTruthy());

  it('debería ser 3', () => {
    // A = Arrange
    const numero1 = 1;
    const numero2 = 2;

    // A = Act
    const resultado = numero1 + numero2;

    // A = Assert
    expect(resultado).toBe(3);
  });

  it(`debería tener el título 'calculadora'`, () => expect(app.title).toEqual('calculadora'));

  it('debe renderizar router-outlet', () => expect(compiled.querySelector('router-outlet')).not.toBeNull());

  it('debería renderizar router-outlet envuelto con clases CSS', () => {
    const elementoDiv = compiled.querySelector('div');
    const clasesCssObligatorias = 'min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5'.split(' ');

    expect(elementoDiv).not.toBeNull();

    // elementoDiv?.classList.forEach(clase => expect(clasesCss).toContain(clase));

    const clasesCss = elementoDiv?.classList.value.split(' ');

    clasesCssObligatorias.forEach(clase => expect(clasesCss).toContain(clase));
  });

  it("debería contener el 'buy me a beer'", () => {
    const elementoAnchor = compiled.querySelector('a');
    expect(elementoAnchor).not.toBeNull();
    expect(elementoAnchor?.title).toBe('Buy me a beer');
    expect(elementoAnchor?.href).toBe('https://www.buymeacoffee.com/scottwindon');
    expect(elementoAnchor?.getAttribute('href')).toBe('https://www.buymeacoffee.com/scottwindon');
  });

});