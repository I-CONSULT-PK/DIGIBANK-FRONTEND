import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { IcsModalComponent } from 'app/components/ics-modal/ics-modal.component';
import { IcsDropdownComponent } from 'app/components/ics-dropdown/ics-dropdown.component';

@Component({
    selector: 'funds-transfer',
    templateUrl: './funds-transfer.component.html',
    styleUrls: ['./funds-transfer.component.scss']
})
export class FundsTransferComponent implements OnInit {


    profileForm = new FormGroup({
        TransferName: new FormControl(''),
        accountNumber: new FormControl(''),
        accountTitle: new FormControl(''),
        nickName: new FormControl(''),
        amount: new FormControl(''),
    });

    TransferData: any[] = [
        { Id: null, TransferName: 'Accont Name' },
        { Id: 1, TransferName: 'Fatima' },
        { Id: 2, TransferName: ' Ahmad Ali' },
        { Id: 3, TransferName: 'Nasir Khan ' },
    ]
    async ngOnInit() { }
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
    // profileForm = new FormGroup({
    //     amount: new FormControl('BalanceAMount'),
    // });
    CurrentBal = 45000;
    CurrentDisBal: any = 0;

    handleAmountChange(enteredAmount: any) {

        var NewBal = 0;
        this.CurrentDisBal = this.CurrentBal;
        if (enteredAmount > 0 && enteredAmount != "" && enteredAmount != '') {
            this.CurrentDisBal = NewBal = this.CurrentBal - enteredAmount;
        }
    }
    // async OpenModal() {

    //     this.modal.open();
    // }
    onDropdownChange() {
        console.log('Selected bank:', this.profileForm.value.TransferName);

    }
    // async SuccessPopup() {

    //     this.NewModal1.open('xs');
    // }

}



