import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'forgot-password',
    templateUrl: 'forgot-password.component.html',
    styleUrls: ['forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    constructor() { }
    
    async ngOnInit() {
    }
    stepCounter: any = 1;
    async StepUp() {
        this.stepCounter++;
    }
    async StepDown() {
        this.stepCounter--;
    }
}
