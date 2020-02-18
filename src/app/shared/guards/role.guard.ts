import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { CONSTANTS } from '@constants';
import { AlertService } from '../services/alert.service';


@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    public router: Router,
    private alertService: AlertService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    // If user didn't login or try to access routes not applicable to his role
    if (route.data.allowedRole !== sessionStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEYS.ROLE)) {
      this.alertService.error('Unauthorized role!');
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
