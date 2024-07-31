import { OtpVerificationModule } from './../components/otp-verification/otp-verification.module';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ForgotPasswordComponent } from './forgot-password.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { loginService } from 'app/login/login.service';
import { LoaderService } from 'app/@core/helper/loader.service';
import { IcsErrorModule } from 'app/components/ics-error/ics-error.module';
import { otpService } from 'app/components/otp-verification/otp-verification.service';

@NgModule({
    imports: [
        // NgModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OtpVerificationModule,
        IcsErrorModule,
        OtpVerificationModule
    ],
    declarations: [
        ForgotPasswordComponent,
    ],
    exports: [
        ForgotPasswordComponent,
    ],
    providers:[loginService,LoaderService,otpService]
})
export class ForgotPasswordModule {

}
