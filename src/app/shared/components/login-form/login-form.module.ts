import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SmallSpinnerModule } from '../small-spinner/small-spinner.module';

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    SmallSpinnerModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginFormModule { }
