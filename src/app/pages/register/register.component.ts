import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    protected authService: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      displayName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }
    const controls = this.registerForm.controls;
    const user = {
      uid: undefined,
      email: controls['email'].value,
      displayName: controls['displayName'].value,
      password: controls['password'].value
    } as User;
    this.authService.singUp(user);
  }

}
