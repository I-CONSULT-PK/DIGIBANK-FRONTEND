// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { OtpVerificationComponent } from './otp-verification.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        OtpVerificationComponent,
    ],
    exports: [
        OtpVerificationComponent,
    ]
})
export class OtpVerificationModule {

}
