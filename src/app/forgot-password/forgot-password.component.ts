import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'forgot-password',
    templateUrl: 'forgot-password.component.html',
    styleUrls: ['forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    constructor(private router: Router) { }
    tittle: any = "Enter Your Credentials For Forget User Name";
    async ngOnInit() {
    }
    stepCounter: any = 1;
    async StepUp() {
        this.stepCounter++;
    }
    async StepDown() {
        this.stepCounter--;
    }
    async BackLogin() {
        this.router.navigate(["/login"]);
    }
}

