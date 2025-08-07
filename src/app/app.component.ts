import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>', // <store/>  or <cart-detail/>  or <checkout/>
})
export class AppComponent {} // SRP - launch feature component
