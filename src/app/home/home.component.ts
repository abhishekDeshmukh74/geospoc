import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
