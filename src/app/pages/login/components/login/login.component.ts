import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
  }
  // que imprime abstract control
  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get emailValue(): string {
    return this.loginForm.get('email').value;
  }
  get passwordValue(): string {
    return this.loginForm.get('password').value;
  }
  public get form(): any {
    return this.loginForm.controls;
  }
  signIn(): void {
    let user: User = {
      email: this.emailValue,
      password: this.passwordValue,
    };
    this.authService
      .login(user)
      .then((response) => {
        this.authService.isLoged = true;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  signOut(): void {
    this.authService
      .logout()
      .then((response) => {
        this.authService.isLoged = false;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
