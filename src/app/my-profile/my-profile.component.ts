import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  loading = false;
  readonly myProfileValidator = myProfileValidator;
  myProfileForm: FormGroup;

  constructor(
    private alertService: AlertService,
    private appService: AppService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.initRegistrationFormGroup();
  }

  initRegistrationFormGroup() {
    this.myProfileForm = this.formBuilder.group({
      name: [null, myProfileValidator.name.nameValidations],
      email: [null, myProfileValidator.email.emailValidations],
      webAddress: [null, myProfileValidator.webAddress.webAddressValidations],
      coverLetter: [null, myProfileValidator.coverLetter.coverLetterValidations],
      resume: [null, myProfileValidator.resume.resumeValidations],
      likeWorking: [null, myProfileValidator.likeWorking.likeWorkingValidations],
    });
  }

  onUpdate() {
    if (this.myProfileForm.invalid) {
      return this.alertService.error('Form validations failed');
    }

    this.appService.updateProfile(this.myProfileForm.value).subscribe(
      (res: any) => {
        this.alertService.success('my profile updated');
      }
    );
  }

  onFileChange(event) {
    const reader: any = new FileReader();
    if (event.target.files?.length > 0) {
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {

        this.uploadedFileName = event.target.files[0].name;
        this.myProfileForm.get('resume')
          .setValue({
            filename: event.target.files[0].name,
            filetype: event.target.files[0].type,
            filesize: event.target.files[0].size,
            filedata: reader.result.split(',')[1],
          });
      };
    }
  }
}
