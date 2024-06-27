import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IcsModalComponent } from 'app/components/ics-modal/ics-modal.component';

@Component({
    selector: 'funds-transfer',
    templateUrl: './funds-transfer.component.html',
    styleUrls: ['./funds-transfer.component.scss']
})
export class FundsTransferComponent implements OnInit {
    
    @ViewChild('Modal1') modal: IcsModalComponent | any;
    @ViewChild('NewModal1') NewModal1: IcsModalComponent | any;

    remainingAmountNew: number = 0;
    constructor() { }
    test: Date = new Date();
    ngOnInit() {
        this.CurrentDisBal = this.CurrentBal;
    }

    accountData: any = [
        {
            Id: 1,
            accountname: "My First Account"
        },
        {
            Id: 2,
            accountname: "Meezan Account"
        },
        {
            Id: 3,
            accountname: "Alfalah Account"
        },
        {
            Id: 4,
            accountname: "New Account"
        },
    ]

    BankData: any = [
        {
            Id: 1,
            bankname: "Meezan Bank"
        },
        {
            Id: 2,
            bankname: "Bank Alfalah"
        },
        {
            Id: 3,
            bankname: "ALied Bank"
        },
        {
            Id: 4,
            bankname: "JS Bank"
        },
        {
            Id: 5,
            bankname: "Naya Pay"
        },
        {
            Id: 6,
            bankname: "Sada Pay"
        },
    ]
    TypeData: any = [
        {
            Id: 1,
            forname: "Others"
        },
        {
            Id: 2,
            forname: "Card Bill Payment"
        },
        {
            Id: 3,
            forname: "Rental Payment"
        },
        {
            Id: 4,
            forname: "Hotel Payment"
        },
        {
            Id: 5,
            forname: "School and University Fee Payment"
        },
        {
            Id: 6,
            forname: "Donations or Charity"
        },
        {
            Id: 7,
            forname: "Supplier and Distributor Payment"
        },
    ]
    profileForm = new FormGroup({
        amount: new FormControl('BalanceAMount'),
    });
    CurrentBal = 45000;
    CurrentDisBal: any = 0;

    handleAmountChange(enteredAmount: any) {
        debugger
        var NewBal = 0;
        this.CurrentDisBal = this.CurrentBal;
        if (enteredAmount > 0 && enteredAmount != "" && enteredAmount != '') {
            this.CurrentDisBal = NewBal = this.CurrentBal - enteredAmount;
        }
    }
    async OpenModal() {
        debugger
        this.modal.open();
    }
    async SuccessPopup() {
        debugger
        this.NewModal1.open('xs');
    }
    
}



