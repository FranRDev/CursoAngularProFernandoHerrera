import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCalculadoraComponent } from './boton-calculadora.component';

describe('BotonCalculadoraComponent', () => {

  let fixture: ComponentFixture<BotonCalculadoraComponent>;
  let compiled: HTMLElement;
  let component: BotonCalculadoraComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonCalculadoraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BotonCalculadoraComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    console.log(compiled);
    expect(component).toBeTruthy();
  });

  it('debería aplicarse w-1/4 si doble es falso', () => {
    expect(component.doble()).toBeFalse();

    const clasesCssHost: string[] = compiled.classList.value.split(' ');
    expect(clasesCssHost).toContain('w-1/4');
  });

  it('debería aplicarse w-2/4 si doble es true', () => {
    fixture.componentRef.setInput('doble', true);
    fixture.detectChanges();

    expect(component.doble()).toBeTrue();

    const clasesCssHost: string[] = compiled.classList.value.split(' ');
    expect(clasesCssHost).toContain('w-2/4');
  });

});