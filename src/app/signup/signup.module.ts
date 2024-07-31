import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { signupComponent } from './signup.component';
import { OtpVerificationModule } from 'app/components/otp-verification/otp-verification.module';
import { signupService } from './signup.service';
import { LoaderService } from 'app/@core/helper/loader.service';
import { HttpClientModule } from '@angular/common/http';
import { IcsErrorModule } from 'app/components/ics-error/ics-error.module';
import { BrowserModule } from '@angular/platform-browser';
import { otpService } from 'app/components/otp-verification/otp-verification.service';

@NgModule({
  imports: [
    CommonModule,
    OtpVerificationModule,
    HttpClientModule,
    BrowserModule,
    RouterModule, FormsModule, ReactiveFormsModule, IcsErrorModule,
    
  ],

  declarations: [
    signupComponent,
  ],
  exports: [
    signupComponent,
  ],
  providers: [signupService, LoaderService,otpService]
})

export class SignupModule { }
