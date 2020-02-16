import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AppService } from 'src/app/app.service';
import { registerFormValidator } from './register-form.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Input() userType: string;

  registrationForm: FormGroup;
  submitted = false;
  loading = false;
  readonly registerFormValidator = registerFormValidator;
  ipAddress = '';

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.initRegistrationFormGroup();
  }

  getIPAddress1() {
    this.appService.getIpAddress().subscribe(res => {
      this.ipAddress = res.ip;
    });
  }

  initRegistrationFormGroup() {
    this.registrationForm = this.formBuilder.group({
      name: [null, registerFormValidator.name.nameValidations],
      email: [null, registerFormValidator.email.emailValidations],
      webAddress: [null, registerFormValidator.webAddress.webAddressValidations],
      coverLetter: [null, registerFormValidator.coverLetter.coverLetterValidations],
      resume: [null, registerFormValidator.resume.resumeValidations],
      likeWorking: [null, registerFormValidator.likeWorking.likeWorkingValidations],
    });
  }

}
