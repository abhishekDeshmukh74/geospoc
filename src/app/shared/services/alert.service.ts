import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  isError: boolean;

  constructor(public snackBar: MatSnackBar) { }

  success(message, action = '', duration = 3000) {
    this.isError = false;
    this.snackBar.open(message, action, {
      duration,
      verticalPosition: 'top',
      panelClass: ['success-snackbar'],
    });
  }

  warning(message, action = '', duration = 3000) {
    this.isError = false;
    this.snackBar.open(message, action, {
      duration,
      verticalPosition: 'top',
      panelClass: ['warn-snackbar'],
    });
  }

  error(message, action = 'OK') {
    this.isError = true;
    this.snackBar.open(message, action, {
      verticalPosition: 'top',
      panelClass: ['error-snackbar'],
    });
  }

  dismissSnackBar() {
    if (this.snackBar._openedSnackBarRef && this.isError) {
      this.snackBar.dismiss();
    }
  }
}
