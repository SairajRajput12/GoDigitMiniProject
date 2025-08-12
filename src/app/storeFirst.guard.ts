import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { EventComponent } from './store/events.component';

@Injectable()
export class StoreFirstGuard {
  private firstNavigation = true;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component != EventComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }
}
