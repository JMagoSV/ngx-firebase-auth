import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';

const routes:  Routes  = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path:  'main', component:  MainComponent, children: [
      { path:  'login',component:  LoginComponent},
      { path:  'register', component:  RegisterComponent },
      { path:  'forgot-password', component:  ForgotPasswordComponent },
      { path:  'verify-email', component:  VerifyEmailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
