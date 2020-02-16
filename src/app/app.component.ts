import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showLogin = true;
  showRegister = false;

  isRegisterClicked(isRegisterClicked: boolean) {
    this.showLogin = false;
    this.showRegister = true;
  }

  isLoginClicked(isLoginClicked: boolean) {
    this.showLogin = true;
    this.showRegister = false;
  }

}
