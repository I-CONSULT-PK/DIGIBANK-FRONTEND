import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { loginComponent } from './login.component';
import { loginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LoaderService } from 'app/@core/helper/loader.service';
import { IcsErrorModule } from 'app/components/ics-error/ics-error.module';
 

@NgModule({
  imports: [
    // CommonModule,
    // RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    // MatButtonModule,
    // MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    // MatSelectModule,
    // MatTooltipModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    RouterModule, FormsModule, ReactiveFormsModule, IcsErrorModule,
  

  ],

  declarations: [
    loginComponent,
  ],
  exports: [
    loginComponent,
  ],
  providers: [loginService, LoaderService]
})

export class LoginModule { }
