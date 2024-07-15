import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'otp-verification',
    templateUrl: 'otp-verification.component.html',
    styleUrls: ['otp-verification.component.scss']
})
export class OtpVerificationComponent implements OnInit {

    constructor() { }
    async ngOnInit() {

    }
    input1: string = '';
    input2: string = '';
    input3: string = '';
    input4: string = '';
    input5: string = '';
    input6: string = '';
    value: string = '';

    handleInput(event: any, inputNumber: number) {

        const inputValue = event.target.value;

        // Check if the input value is not empty and if it's a single digit
        if (inputValue && /^\d$/.test(inputValue)) {
            // Move focus to the next input field
            const nextInputNumber = inputNumber % 7 + 1;
            const nextInput = document.querySelector(`input:nth-child(${nextInputNumber})`) as HTMLInputElement;

            if (nextInput) {
                nextInput.focus();
            }
        }
        this.value = this.input1 + "" + this.input2 + "" + this.input3 + "" + this.input4 + "" + this.input5 + "" + this.input6;
    }
}
