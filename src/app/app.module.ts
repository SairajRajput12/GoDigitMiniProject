import { CheckoutComponent } from './store/checkOut.component';
import { StoreFirstGuard } from './storeFirstGuard';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { StoreModule } from './store/store.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // register component,directives & pipes (non-services)
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // RouterTree
      {
        path: 'cart', // path property in route object --- tracks the BrowserURL state
        component: CartDetailComponent, // delivers the appropriate component
        canActivate: [StoreFirstGuard], // routeGuard
      },
      {
        path: 'store',
        component: StoreComponent,
        canActivate: [StoreFirstGuard], //routeGuard
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [StoreFirstGuard], //routeGuard
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
        // component: AdminComponent,

        // canActivate: [StoreFirstGuard], //routeGuard
      },
      {
        path: '**',
        redirectTo: '/store', // makes a state change in the BrowserURl state - #HashBang
      },
    ]),
    StoreModule,
  ], // Blocking script| Preloading modules| Dependency modules| Wider modules
  providers: [StoreFirstGuard], // register & launch services (Injectables)
  bootstrap: [AppComponent], // launch a root component
})
export class AppModule {} // SRP -> register & launch a root component

// Root level entities should not directly try to interact with Model level entity
