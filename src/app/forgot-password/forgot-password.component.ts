import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { loginService } from '../login/login.service';
import { AppComponent } from 'app/app.component';
import { NavComponent } from 'app/@core/base/Nav.Component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IcsErrorComponent } from 'app/components/ics-error/ics-error.component';
import { otpService } from '../components/otp-verification/otp-verification.service'
import { OtpVerificationComponent } from 'app/components/otp-verification/otp-verification.component';
@Component({
    selector: 'forgot-password',
    templateUrl: 'forgot-password.component.html',
    styleUrls: ['forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    constructor(private loginService: loginService, private router: Router, private fb: FormBuilder, private otpService: otpService, private rt: ActivatedRoute) { }
    public myForm!: FormGroup;
    @ViewChild('IcsError') dcserror: IcsErrorComponent | any;
    @ViewChild('otpInput') otpInput: OtpVerificationComponent | any;
    tittle: any = "Enter Your Credentials For Forget User Name";
    async ngOnInit() {
        this.myForm = this.fb.group({
            accountNumber: [''],
            cnicNumber: [''],
            oldpass: [''],
            newpass: [''],
            confirmpass: [''],
        });
        await this.GetPathVariableValue();
    }
    pathVariableValues: any = "";
    async GetPathVariableValue() {

        this.pathVariableValues = "";
        this.rt.params.subscribe(params => {
            this.pathVariableValues = params['frgto'];
        });
    }
    stepCounter: any = 1;
    activityModemStep: any = 1;

    async StepUp() {
        this.stepCounter++;
    }
    async StepDown() {
        this.stepCounter--;
    }
    async BackLogin() {
        this.router.navigate(["/login"]);
    }

    userInfo: any = {};
    async ForgetUserGetEmail() {

        var dto = {
            accountNumber: this.myForm.controls['accountNumber'].value,
            cnic: this.myForm.controls['cnicNumber'].value,
        };
        this.userInfo.accountNumber = this.myForm.controls['accountNumber'].value;
        this.userInfo.cnic = this.myForm.controls['cnicNumber'].value;
        const result: any = await this.loginService.forgotUserTogetEmail(dto);
        if (result && result.success && result.success == true && result.data != null) {
            if (result.data.email && result.data.mobileNumber) {
                var CreationDto: any = {};
                CreationDto = {
                    mobileNumber: result.data.mobileNumber,
                    email: result.data.email,
                    reason: "Verify User For Forget UserName"
                };
                const Otpresult: any = await this.otpService.OTPCreation(CreationDto);
                if (Otpresult && Otpresult.success && Otpresult.success == true) {
                    this.NextActivity(2);
                    this.userInfo.mobileNumber = result.data.mobileNumber;
                    this.userInfo.email = result.data.email;
                }
                else {
                    if (result && result.data && result.data.errors && result.data.errors.length > 0) {
                        this.dcserror.showErrors(result.data.errors, 'Error', 4);
                    }
                    else {
                        if (result && result.message) {
                            this.dcserror.showErrors(result.message, 'Error', 4);
                        }
                        else {
                            this.dcserror.showErrors("Error Occurred", 'Error', 4);
                        }
                    }
                }

            }
        }
        else {
            if (result && result.data && result.data.errors && result.data.errors.length > 0) {
                this.dcserror.showErrors(result.data.errors, 'Error', 4);
            }
            else {
                if (result && result.message) {
                    this.dcserror.showErrors(result.message, 'Error', 4);
                }
                else {
                    this.dcserror.showErrors("Error Occurred", 'Error', 4);
                }
            }
        }
    }

    async VerifyOTP() {

        this.otpInput
        var CreationDto: any = {};
        CreationDto = {
            mobileNumber: this.userInfo.mobileNumber,
            email: this.userInfo.email,
            emailOtp: this.otpInput && this.otpInput.value ? this.otpInput.value : '',
        };
        const dto: any = await this.otpService.OTPVerify(CreationDto);
        if (dto && dto.success && dto.success == true) {

            if (this.pathVariableValues && this.pathVariableValues == 'username') {
                await this.ForgetUserName();
            }
            else if (this.pathVariableValues && this.pathVariableValues == 'password') {
                this.NextActivity(3);
            }
        }
        else {
            if (dto && dto.data && dto.data.errors && dto.data.errors.length > 0) {
                this.dcserror.showErrors(dto.data.errors, 'Error', 4);
            }
            else {
                if (dto && dto.message) {
                    this.dcserror.showErrors(dto.message, 'Error', 4);
                }
                else {
                    this.dcserror.showErrors('Some Thing Wents Wrong', 'Error', 4);
                }
            }
        }
    }
    async NextActivity(activityModem: any) {

        this.activityModemStep = activityModem;
    }
    async ForgetUserName() {

        var dto = {
            accountNumber: this.userInfo.accountNumber,
            cnic: this.userInfo.cnic,
        };
        const result: any = await this.loginService.forgotUsername(dto);
        if (result && result.success && result.success == true) {
            this.dcserror.showErrors("Your User Name Has Been Send To Your Email.", 'Success', 2);
            await this.BackLogin();
        }
        else {
            if (result && result.data && result.data.errors && result.data.errors.length > 0) {
                this.dcserror.showErrors(result.data.errors, 'Error', 4);
            }
            else {
                if (result && result.message) {
                    this.dcserror.showErrors(result.message, 'Error', 4);
                }
                else {
                    this.dcserror.showErrors('Some thing wents wrong', 'Error', 4);
                }
            }
        }
    }
    async ForgetPassword() {
        var dto = {
            accountNumber: this.userInfo.accountNumber,
            cnic: this.userInfo.cnic,
            password: this.myForm.controls['confirmpass'].value,
        };
        const result: any = await this.loginService.forgotpassword(dto);
        if (result && result.success && result.success == true) {
            // this.dcserror.showErrors("Your User Name Has Been Send To Your Email.", 'Success', 2);
            await this.BackLogin();
        }
        else {
            if (result && result.data && result.data.errors && result.data.errors.length > 0) {
                this.dcserror.showErrors(result.data.errors, 'Error', 4);
            }
            else {
                if (result && result.message) {
                    this.dcserror.showErrors(result.message, 'Error', 4);
                }
                else {
                    this.dcserror.showErrors('Some thing wents wrong', 'Error', 4);
                }
            }
        }
    }
}