import { CheckoutComponent } from './checkOut.component';
import { RouterModule } from '@angular/router';
import { CartDetailComponent } from './cartDetail.component';
import { CartSummaryComponent } from './cartSummary.component';
import { ModelModule } from './../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { StoreComponent } from './store.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [BrowserModule, ModelModule, RouterModule],
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
  ], // Registeration & Launch
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent], // sharing/exposing components across modules/injector
})
export class StoreModule {} // register & launch feature components or non-services
