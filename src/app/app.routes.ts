import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { ContadorComponent } from './domains/info/components/contador/contador.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'contador',
    component: ContadorComponent
  }
];
