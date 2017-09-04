import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsResolver } from '../../core/resolvers/products.resolver';
import { ProductResolver } from '../../core/resolvers/product.resolver';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ProductListComponent,
    resolve: {
      products: ProductsResolver
    }
  },
  {
    path: 'create',
    component: ProductCreateComponent
  },
  {
    path: ':productId/details',
    component: ProductDetailsComponent,
    resolve: {
      product: ProductResolver
    }
  },
  {
    path: ':productId/edit',
    component: ProductEditComponent,
    resolve: {
      product: ProductResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
