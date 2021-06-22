import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-link-up',
  templateUrl: './link-up.component.html',
  styleUrls: ['./link-up.component.scss']
})
export class LinkUpComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    protected authService: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      password: ['', Validators.required]
    });
  }

  linkEmailAndPassword() {
    if (this.registerForm.invalid) {
      return;
    }
    const controls = this.registerForm.controls;
    this.authService.linkUpEmailAndPassword(controls['password'].value);
  }

  linkGmail() {
    this.authService.linkUpGmail();
  }

  linkFacebook() {
    this.authService.linkUpFacebook();
  }

}
