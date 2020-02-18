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
  isLoading = false;

  constructor(
    private alertService: AlertService,
    private appService: AppService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', loginFormValidator.email.emailValidations],
      password: ['', loginFormValidator.password.passwordValidations],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return this.alertService.error('Form validations failed');
    }

    this.isLoading = true;
    this.appService.login({
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
      type: this.userType,
    }).subscribe(
      (res: any) => {
        this.isLoading = false;
        this.alertService.success('Login success');
        if (this.userType === 'CANDIDATE') {
          this.router.navigate(['/my-profile']);
        }
        if (this.userType === 'RECRUITER') {
          this.router.navigate(['/candidates']);
        }
      }
    );

  }

  onRegister(isRegisterClicked: boolean) {
    this.registerClicked.emit(isRegisterClicked);
  }
}
