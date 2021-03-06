import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form.component';
import { MatRadioModule } from '@angular/material/radio';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SmallSpinnerModule } from '../small-spinner/small-spinner.module';

@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    SmallSpinnerModule,
    ReactiveFormsModule,
  ],
  exports: [
    RegisterFormComponent
  ]
})
export class RegisterFormModule { }
