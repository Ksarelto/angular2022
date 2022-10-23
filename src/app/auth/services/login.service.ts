import { IFormShape } from './../../shared/models/form.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  saveUserCredentials(value: IFormShape) {
    const loginData = JSON.stringify({
      login: value.login,
      password: value.password,
      token: Math.random().toFixed(10),
    });

    localStorage.setItem('user_credentials', loginData);
  }

  logOut() {
    localStorage.removeItem('user_credentials');
  }
}
