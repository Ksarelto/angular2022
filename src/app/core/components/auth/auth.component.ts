import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  userLoggedIn: BehaviorSubject<boolean>;

  userName: string;

  constructor(private router: Router, private loginService: LoginService) {
    this.userLoggedIn = loginService.loggedOut;
  }

  ngOnInit() {
    this.loginService.userData.subscribe((data) => {
      this.userName = data.login ?? '';
    });
  }

  goToLoginPage() {
    this.router.navigate(['auth']);
  }

  logOut() {
    this.loginService.logOut();
  }
}
