import { Routes } from '@angular/router';

import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { ForgotPassword } from './features/auth/forgot-password/forgot-password';
import { Dashboard } from './features/dashboard/dashboard';
import { Onboarding } from './features/onboarding/onboarding';
import { Leads } from './features/leads/leads';
import { LeadDetails } from './features/leads/lead-details/lead-details';

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
    path: 'leads',
    component: Leads
  },

  {
      path: 'leads/:id',
      component: LeadDetails
    },

  {
    path: '**',
    redirectTo: 'login'
  }

];