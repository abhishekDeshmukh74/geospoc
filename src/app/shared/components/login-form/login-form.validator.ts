
import { Validators } from '@angular/forms';

export const loginFormValidator = {
  email: {
    emailValidations: Validators.compose([
      Validators.required,
      Validators.email
    ]),
    emailValidationsMessages: [
      {
        type: 'required',
        message: 'Email address is required'
      },
      {
        type: 'email',
        message: 'Email address is invalid',
      },
    ],
  },
  password: {
    passwordValidations: Validators.compose([
      Validators.required,
      Validators.minLength(4)
    ]),
    passwordValidationsMessages: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 4 characters long' }
    ]
  },
};
