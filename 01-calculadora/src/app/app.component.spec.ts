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

});