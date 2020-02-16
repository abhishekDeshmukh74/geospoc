import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AppService } from 'src/app/app.service';
import { registerFormValidator } from './register-form.validator';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Input() userType: string;
  @Output() loginClicked = new EventEmitter<boolean>();

  registrationForm: FormGroup;
  submitted = false;
  loading = false;
  readonly registerFormValidator = registerFormValidator;
  ipAddress: string;
  latitude: string;
  longitude: string;

  constructor(
    private alertService: AlertService,
    private appService: AppService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initRegistrationFormGroup();
    this.getIPAddress();
  }

  getIPAddress() {
    this.appService.getIpAddress().subscribe(res => {
      this.ipAddress = res.ip;
      this.getGeoLocation();
    });
  }

  getGeoLocation() {
    this.appService.getGEOLocation(this.ipAddress).subscribe(res => {
      this.latitude = res.latitude;
      this.longitude = res.longitude;
      this.registrationForm.patchValue({
        ipAddress: this.ipAddress,
        latitude: this.latitude,
        longitude: this.longitude,
      });
    });
  }

  initRegistrationFormGroup() {
    this.registrationForm = this.formBuilder.group({
      email: ['', registerFormValidator.email.emailValidations],
      password: ['', registerFormValidator.password.passwordValidations],
      ipAddress: ['', registerFormValidator.password.passwordValidations],
      latitude: ['', registerFormValidator.password.passwordValidations],
      longitude: ['', registerFormValidator.password.passwordValidations],

      //   name: [null, registerFormValidator.name.nameValidations],
      //   email: [null, registerFormValidator.email.emailValidations],
      //   webAddress: [null, registerFormValidator.webAddress.webAddressValidations],
      //   coverLetter: [null, registerFormValidator.coverLetter.coverLetterValidations],
      //   resume: [null, registerFormValidator.resume.resumeValidations],
      //   likeWorking: [null, registerFormValidator.likeWorking.likeWorkingValidations],
    });
  }

  onRegister() {
    if (this.registrationForm.invalid) {
      return this.alertService.error('Form validations failed');
    }

    this.appService.register({
      ...this.registrationForm.value,
      type: this.userType,
    }).subscribe(
      (res: any) => {
        this.alertService.success('Goto Registered email to verify email Id');
        this.registrationForm.reset();
      }
    );

  }

  onLogin(loginClicked: boolean) {
    this.loginClicked.emit(loginClicked);
  }

}
