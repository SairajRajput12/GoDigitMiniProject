import { EventComponent } from './events.component';
import { CheckoutComponent } from './booking.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { CartDetailComponent } from './eventDetail.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [
    HomeComponent,
    EventComponent,
    CartDetailComponent,
    CheckoutComponent,
  ],
  exports: [
    EventComponent,
    CartDetailComponent,
    CheckoutComponent,
    HomeComponent,
  ],
})
export class EventModule {}
