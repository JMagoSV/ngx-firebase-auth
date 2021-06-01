import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  loginGoogle() {
    this.authService.googleLogin();
  }

  loginFacebook() {
    this.authService.facebookLogin();
  }

  login() {
    if (this.loginForm.invalid) {
    return;
  }
  const controls = this.loginForm.controls;
    this.authService.emailLogin(controls['email'].value, controls['password'].value);
  }

}
