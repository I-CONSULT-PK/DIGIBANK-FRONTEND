// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ForgotPasswordComponent } from './forgot-password.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OtpVerificationModule } from 'app/components/otp-verification/otp-verification.module';

@NgModule({
    imports: [
        // NgModule,
        CommonModule,
        FormsModule,
        OtpVerificationModule
    ],
    declarations: [
        ForgotPasswordComponent,
    ],
    exports: [
        ForgotPasswordComponent,
    ]
})
export class ForgotPasswordModule {

}
