import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

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
  public signIn(): void {
    let user: User = {
      profile: '',
      email: this.emailValue,
      password: this.passwordValue,
    };
    this.authService
      .login(user)
      .then((response) => {
        this.authService.isLoged = true;
        this.router.navigate(['add']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  public fastAccess(): void {
    let user: User = {
      profile: '',
      email: 'test@gmail.com',
      password: '123456',
    };
    this.authService
      .login(user)
      .then((response) => {
        this.authService.isLoged = true;
        this.router.navigate(['add']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
