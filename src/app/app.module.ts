import { HomeComponent } from './store/home.component';
import { CheckoutComponent } from './store/booking.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EventModule } from './store/events.module';
import { EventComponent } from './store/events.component';
import { CartDetailComponent } from './store/eventDetail.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './interceptor/httpinterceptor-service';

@NgModule({
  imports: [
    BrowserModule,
    EventModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'event',
        component: EventComponent,
      },
      {
        path: 'booking',
        component: CartDetailComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },

      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
        //    component: AuthComponent,
      },

      { path: '**', redirectTo: '/home' },
    ]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
