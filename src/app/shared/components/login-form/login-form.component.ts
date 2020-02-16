import { AppService } from './../../../app.service';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { loginFormValidator } from './login-form.validator';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginFormComponent implements OnInit {

  @Input() userType: string;
  @Output() registerClicked = new EventEmitter<boolean>();


  loginForm: FormGroup;
  readonly loginFormValidator = loginFormValidator;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private appService: AppService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', loginFormValidator.email.emailValidations],
      password: ['', loginFormValidator.password.passwordValidations],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return this.alertService.error('Form validations failed');
    }

    this.appService.login({}).subscribe(
      (res: any) => {
        this.alertService.success('Login success');
        this.router.navigate(['/my-profile']);
      }
    );

  }

  onRegister(isRegisterClicked: boolean) {
    this.registerClicked.emit(isRegisterClicked);
  }
}
