import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { loginComponent } from './login/login.component';
import { signupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { LogoutComponent } from '../app/logout/logout.component';
import { AddChildAccountComponent } from './add-child-account/add-child-account.component';

const routes: Routes = [
  {
    path: '',
    component: ProductHomeComponent,
    children: [{
      path: '',
      loadChildren: () => import('../app/product-home/product-home.module').then(m => m.ProductHomeModule)
    }]
  },
  {
    path: 'Admin',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },

  {
    path: 'login',
    component: loginComponent,
    children: [{
      path: '',
      loadChildren: () => import('../app/login/login.module').then(m => m.LoginModule)
    }]
  },
  {
    path: 'Signup',
    component: signupComponent,
    children: [{
      path: '',
      loadChildren: () => import('../app/signup/signup.module').then(m => m.SignupModule)
    }]
  },
  {
    path: 'ForgetPassword/:frgto',
    component: ForgotPasswordComponent,
    children: [{
      path: '',
      redirectTo: './forgot-password/forgot-password.component.html',
      loadChildren: () => import('../app/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
    }]
  },
  {
    path: 'Logout',
    component: LogoutComponent,
    children: [{
      path: '',
      redirectTo: './logout/logout.component.html',
      loadChildren: () => import('../app/logout/logout.module').then(m => m.LogoutModule)
    }]
  },
  {
    path: 'AddChildAccount',
    component: AddChildAccountComponent,
    children: [{
      path: '',
      redirectTo: './add-child-account/add-child-account.component.html',
      loadChildren: () => import('../app/add-child-account/add-child-account.module').then(m => m.AddChildAccountModule)
    }]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
