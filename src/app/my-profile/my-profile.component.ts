import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CONSTANTS } from '@constants';
import { myProfileValidator } from './my-profile.validator';
import { AlertService } from '../shared/services/alert.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  uploadedFileName: string;
  submitted = false;
  isLoading = false;
  readonly myProfileValidator = myProfileValidator;
  myProfileForm: FormGroup;
  user: any;

  constructor(
    private alertService: AlertService,
    private appService: AppService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.setEmailAddress();
    this.initRegistrationFormGroup();
  }
  setEmailAddress() {
    this.user = JSON.parse(sessionStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEYS.LOGGED_IN_USER));
  }

  initRegistrationFormGroup() {
    this.myProfileForm = this.formBuilder.group({
      name: [this.user.name, myProfileValidator.name.nameValidations],
      email: [this.user.email, myProfileValidator.email.emailValidations],
      webAddress: [this.user.webAddress, myProfileValidator.webAddress.webAddressValidations],
      coverLetter: [this.user.webAddress, myProfileValidator.coverLetter.coverLetterValidations],
      resume: [null, myProfileValidator.resume.resumeValidations],
      likeWorking: [this.user.likeWorking, myProfileValidator.likeWorking.likeWorkingValidations],
    });
  }

  onUpdate() {
    if (this.myProfileForm.invalid) {
      return this.alertService.error('Form validations failed');
    }
    this.isLoading = true;

    this.appService.updateProfile({ ...this.myProfileForm.value, userId: this.user._id }).subscribe(
      (res: any) => {
        this.isLoading = false;
        this.alertService.success('my profile updated');
      },
      (error) => {
        this.isLoading = false;
        if (error.status === 400) {
          return this.alertService.error(error.message);
        }
        this.alertService.error('Error in updating profile!');
      }
    );
  }

  onFileChange(event) {
    const reader: any = new FileReader();
    if (event.target.files?.length > 0) {
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {

        this.uploadedFileName = event.target.files[0].name;
        this.myProfileForm.get('resume').setValue(event.target.files[0]);
      };
    }
  }
}
