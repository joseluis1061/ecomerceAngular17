import { Routes } from '@angular/router';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { ListComponent } from './domains/products/pages/list/list.component';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';
import { AboutComponent } from './domains/info/pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '', // Redirige la ruta vacía a '/home'
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./domains/shared/components/layout/layout.component').then(m => m.LayoutComponent),
    children:[
      {
        path: '',
        loadComponent: () => import('./domains/products/pages/list/list.component').then(m => m.ListComponent)
      },
      {
        path: 'product/:pathId',
        loadComponent: () => import('./domains/products/pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./domains/info/pages/about/about.component').then(m => m.AboutComponent)

      },
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./domains/info/pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
