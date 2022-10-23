import { IFormShape } from './../../shared/models/form.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedOut = new BehaviorSubject<boolean>(true);

  userData = new BehaviorSubject<any>({});

  saveUserCredentials(value: IFormShape) {
    const loginData = {
      login: value.login,
      password: value.password,
      token: Math.random().toFixed(10),
    };

    localStorage.setItem('user_credentials', JSON.stringify(loginData));
    this.loggedOut.next(false);
    this.userData.next(loginData);
  }

  logOut() {
    localStorage.removeItem('user_credentials');
    this.loggedOut.next(true);
    this.userData.next({});
  }
}
