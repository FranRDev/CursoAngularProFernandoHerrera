import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'calculadora',
    loadComponent: () => import('@/calculadora/pages/vista-calculadora/vista-calculadora.component')
  },
  {
    path: '**',
    redirectTo: 'calculadora'
  }
];