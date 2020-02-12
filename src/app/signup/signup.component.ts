import { Component, OnInit } from '@angular/core';
import { signupFormValidator } from './signup.validator';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registrationForm: FormGroup;
  submitted = false;
  loading = false;
  readonly signupFormValidator = signupFormValidator;
  // ng add @angular/pwa --project *project-name*

  constructor(
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.initRegistrationFormGroup();
  }

  initRegistrationFormGroup() {
    this.registrationForm = this.formBuilder.group({
      name: [null, signupFormValidator.name.nameValidations],
      email: [null, signupFormValidator.email.emailValidations],
      webAddress: [null, signupFormValidator.webAddress.webAddressValidations],
      coverLetter: [null, signupFormValidator.coverLetter.coverLetterValidations],
      resume: [null, signupFormValidator.resume.resumeValidations],
      likeWorking: [null, signupFormValidator.likeWorking.likeWorkingValidations],
    });
  }

  onRegister() {

  }
}
