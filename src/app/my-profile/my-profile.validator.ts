import { Validators } from '@angular/forms';
import { CONSTANTS } from '@constants';

export const myProfileValidator = {
    name: {
        nameValidations: Validators.compose([
            Validators.required,
            Validators.pattern(CONSTANTS.REGEX.ALLOW_ONLY_CHARACTERS_APOSTROPHE_HYPHEN),
        ]),
        nameValidationsMessages: [
            {
                type: 'required',
                message: 'Last name is required',
            },
            {
                type: 'pattern',
                message: 'Only characters, apostrophe, hyphen are allowed',
            },
        ],
    },
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
    webAddress: {
        webAddressValidations: Validators.compose([
            Validators.required,
        ]),
        webAddressValidationsMessages: [
            {
                type: 'required',
                message: 'Web Address is required',
            }
        ],
    },
    coverLetter: {
        coverLetterValidations: Validators.compose([
            Validators.required
        ]),
        coverLetterValidationsMessages: [
            {
                type: 'required',
                message: 'like Working is required',
            },
        ],
    },
    resume: {
        resumeValidations: Validators.compose([
            Validators.required
        ]),
        resumeValidationsMessages: [
            {
                type: 'required',
                message: 'like Working is required',
            },
        ],
    },
    likeWorking: {
        likeWorkingValidations: Validators.compose([
            Validators.required
        ]),
        likeWorkingValidationsMessages: [
            {
                type: 'required',
                message: 'like Working is required',
            },
        ],
    },
};
