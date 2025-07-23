import { ComponentFixture, TestBed } from '@angular/core/testing';

import VistaCalculadoraComponent from './vista-calculadora.component';

describe('VistaCalculadoraComponent', () => {

  let fixture: ComponentFixture<VistaCalculadoraComponent>;
  let compiled: HTMLElement;
  let component: VistaCalculadoraComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaCalculadoraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VistaCalculadoraComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;
  });

  it('debería crearse el componente', () => expect(component).toBeTruthy());

  it('debería contener el componente calculadora', () => expect(compiled.querySelector('calculadora')).not.toBeNull());

  it('debería contener las clases CSS básicas', () => {
    const clasesBasicas = 'w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden'.split(' ');
    const div = compiled.querySelector('div');
    const clasesDiv = div?.classList.value.split(' ');
    clasesBasicas.forEach(clase => expect(clasesDiv).toContain(clase));
  });

});