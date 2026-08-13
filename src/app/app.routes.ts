import { Routes } from '@angular/router';

import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { ForgotPassword } from './features/auth/forgot-password/forgot-password';
import { Dashboard } from './features/dashboard/dashboard';
import { Onboarding } from './features/onboarding/onboarding';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'forgot-password',
    component: ForgotPassword
  },

  {
    path: 'onboarding',
    component: Onboarding
  },

  {
    path: 'dashboard',
    component: Dashboard
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];