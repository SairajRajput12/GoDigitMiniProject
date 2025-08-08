import { AuthComponent } from './authComponent';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductTableComponent } from './productTable.component';
import { ProductEditorComponent } from './productEditor.component';
import { OrderTableComponent } from './orderTable.component';

let routing = RouterModule.forChild([
  {
    path: 'auth',
    component: AuthComponent,
  },

  {
    path: 'main',
    component: AdminComponent,
    children: [
      { path: 'products/:x/:y', component: ProductEditorComponent }, // {x:'create',y:1}
      { path: 'products/:x', component: ProductEditorComponent }, //
      { path: 'products', component: ProductTableComponent },
      { path: 'orders', component: OrderTableComponent },
      { path: '**', redirectTo: 'products' },
    ],
  },
  { path: '**', redirectTo: 'auth' },
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing], // Dependency Modules
  providers: [],
  declarations: [
    AuthComponent,
    AdminComponent,
    ProductTableComponent,
    ProductEditorComponent,
    OrderTableComponent,
  ],
})
export class AdminModule {} // lazy loaded.
