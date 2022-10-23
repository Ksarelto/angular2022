import {
  areLettersInOneCase,
  isWordHasNumbers,
  isWordIncludeSpecialChar,
} from './../../../shared/methods/validationMethods';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IFormShape } from 'src/app/shared/models/form.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  formName = {
    formName: 'Login',
    submitName: 'Login',
  };

  formElements = [
    {
      title: 'Login',
      name: 'login',
    },
    {
      title: 'Password',
      name: 'password',
    },
  ];

  formElem: FormGroup;

  ngOnInit() {
    this.formElem = new FormGroup({
      login: new FormControl('', Validators.compose([Validators.required, Validators.min(5)])),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, this.customValidator()]),
      ),
    });
  }

  customValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const startStr = "Your password isn't strong enough: \n";
      let value = [];

      if (control.value.length < 8) {
        value.push('- Password is less then 8 chars \n');
      }

      if (areLettersInOneCase(control.value)) {
        value.push('- Letters should be in different cases \n');
      }

      if (!isWordHasNumbers(control.value)) {
        value.push('- You should add numbers to password \n');
      }

      if (!isWordIncludeSpecialChar(control.value)) {
        value.push('- You should add special chars \n');
      }

      if (value.length) {
        value.unshift(startStr);
      }

      return value.length ? { custom: { value: value.join('') } } : null;
    };
  }

  onSubmit(value: IFormShape) {
    this.loginService.saveUserCredentials(value);
    this.router.navigate(['main']);
  }
}
