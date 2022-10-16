import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../../models/login.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.pattern('[\\w\\d]+')]),
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.pattern('[\\w\\d]+')]),
      ),
    });
  }

  onSubmit(value: ILogin) {
    this.loginService.saveUserCredentials(value);
    this.router.navigate(['main']);
  }
}
