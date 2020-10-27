import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGaurd } from './services/admin-auth-gaurd.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'shared/shared.module';
import { DataTableModule } from 'angular5-data-table';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-gaurd.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard , AdminAuthGaurd] },
      { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuard , AdminAuthGaurd] },
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard , AdminAuthGaurd] },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard ,AdminAuthGaurd] },
    ]),
  ],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ]
})
export class AdminModule { }
