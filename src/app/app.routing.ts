import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { loginComponent } from './login/login.component';
import { signupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoutComponent } from './logout/logout.component';
import { AddChildAccountComponent } from './add-child-account/add-child-account.component';
 
const routes: Routes = [
  {
    path: '',
    component: ProductHomeComponent,
    children: [{
      path: '',
      loadChildren: () => import('./product-home/product-home.module').then(m => m.ProductHomeModule)
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
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    }]
  },
  {
    path: 'Signup',
    component: signupComponent,
    children: [{
      path: '',
      loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
    }]
  },
  {
    path: 'ForgetPassword',
    component: ForgotPasswordComponent,
    children: [{
      path: '',
      loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
    }]
  },
  {
    path: 'Logout',
    component: LogoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./logout/logout.module').then(m => m.LogoutModule)
    }]
  },
  {
    path: 'AddChildAccount',
    component: AddChildAccountComponent,
    children: [{
      path: '',
      loadChildren: () => import('./add-child-account/add-child-account.module').then(m => m.AddChildAccountModule)
    }]
  },
];
 
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }