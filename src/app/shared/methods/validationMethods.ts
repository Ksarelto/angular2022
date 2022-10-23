import { IFormElem } from '../models/form.model';
import { ValidationErrors } from '@angular/forms';
export const areLettersInOneCase = (word: string) =>
  word === word.toLowerCase() || word === word.toUpperCase();

export const isWordHasNumbers = (word: string) => /\d/.test(word);

export const isWordIncludeSpecialChar = (word: string) =>
  /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(word);

export const showErrorMessage = (errors: ValidationErrors, elem: IFormElem) => {
  const { required, pattern, custom, minlength, maxlength } = errors || {};

  if (required) {
    return `Please enter a ${elem.title}`;
  }

  if (pattern) {
    return `The ${elem.name} is invalid`;
  }

  if (minlength) {
    return `The ${elem.name} it too short`;
  }

  if (maxlength) {
    return `The ${elem.name} it too long`;
  }

  if (custom) {
    return custom.value;
  }

  return 'Error';
};
