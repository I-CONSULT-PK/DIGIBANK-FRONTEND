import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from '../login/login.service';
import { AppComponent } from 'app/app.component';
import { NavComponent } from 'app/@core/base/Nav.Component';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'forgot-password',
    templateUrl: 'forgot-password.component.html',
    styleUrls: ['forgot-password.component.scss']
})
export class ForgotPasswordComponent extends NavComponent<any> {

    constructor(private loginService: loginService) { super(loginService) }
    fb: FormBuilder;
    tittle: any = "Enter Your Credentials For Forget User Name";
    async ngOnInit() {
        this.myForm = this.fb.group({
            accountNumber: [''],
            cnicNumber: [''],
        });
    }
    stepCounter: any = 1;
    async StepUp() {
        this.stepCounter++;
    }
    async StepDown() {
        this.stepCounter--;
    }
    async BackLogin() {
        this.router.route(["/login"]);
    }
    async ForgetUserName() {
        debugger
        var dto = {
            accountNumber: this.myForm.controls['accountNumber'].value,
            cnic: this.myForm.controls['cnicNumber'].value,
        };
        const result: any = await this.loginService.forgotUsername(dto);
        if (result && result.success && result.success == true) {
        }
        else {
            if (result && result.data && result.data.errors && result.data.errors.length > 0) {
                // this.showErrors(result.data.errors, 'Error', 4);
                this.showErrors('Error', 4);

            }
            else {
                if (result && result.message) {
                    this.showErrors('Error', 4);
                }
                else {
                    this.showErrors('Error', 4);
                }
            }
        }
    }
}

