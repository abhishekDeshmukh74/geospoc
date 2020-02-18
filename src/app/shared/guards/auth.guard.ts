import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { CONSTANTS } from '@constants';
import { AlertService } from '../services/alert.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private alertService: AlertService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!sessionStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEYS.TOKEN)) {
      this.alertService.error('Please Login!');
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
