import { Injectable } from '@angular/core';
import { ILogin } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  saveUserCredentials(value: ILogin) {
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
