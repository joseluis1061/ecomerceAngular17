import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '', // Redirige la ruta vacía a '/home'
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'product/:pathId',
        component: ProductDetailComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
