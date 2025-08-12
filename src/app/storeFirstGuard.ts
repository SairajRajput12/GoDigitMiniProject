import { Injectable } from '@angular/core';
import { EventComponent } from './store/events.component';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class StoreFirstGuard {
  private firstNavigation = true;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;

      if (route.component != EventComponent) {
        this.router.navigateByUrl('/'); // Hashbang
        return false;
      }
    }

    return true;
  }
}

// allow - first navigation - Hashbang !

// disallow - non first navigation - state changes in the BrowserURL state if its not through a Hashbang !
