// import { Component, OnInit, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, } from '@angular/forms';
// import { IcsModalComponent } from 'app/components/ics-modal/ics-modal.component';

// @Component({
//     selector: 'benificiary-management',
//     templateUrl: './benificiary-management.component.html',
//     styleUrls: ['./benificiary-management.component.scss']
// })
// export class BenificiaryManagementComponent implements OnInit {
   

//     @ViewChild('BeneficiaryModal') BeneficiaryModal: IcsModalComponent | any;
//     @ViewChild('NewModal1') NewModal1: IcsModalComponent | any;

//     remainingAmountNew: number = 0;
//     constructor() { }
//     test: Date = new Date();
//     ngOnInit() {
//         this.CurrentDisBal = this.CurrentBal;
//     }

//     accountData: any = [
//         {
//             Id: 1,
//             accountname: "Select Payment Method"
//         },
//         {
//             Id: 2,
//             accountname: "HBL Bank"
//         },
//         {
//             Id: 3,
//             accountname: "Alfalah Bank"
//         },
//         {
//             Id: 4,
//             accountname: "JS Bank"
//         },
//         {
//             Id: 5,
//             accountname: "Standard Charted Bank"
//         },
//         {
//             Id: 6,
//             accountname: "Sindh Bank"
//         },
//         {
//             Id: 7,
//             accountname: "Askari Bank"
//         },
//         {
//             Id: 8,
//             accountname: "BOP Bank"
//         },
//         {
//             Id: 9,
//             accountname: "Summit Bank"
//         },
//         {
//             Id: 10,
//             accountname: "Easypaisa"
//         },
//         {
//             Id: 11,
//             accountname: "JazzCash"
//         },
//         {
//             Id: 12,
//             accountname: "SadaPay"
//         },
//         {
//             Id: 13,
//             accountname: "NayaPay"
//         },
//         {
//             Id: 14,
//             accountname: "HBL Habib Bank"
//         },
//         {
//             Id: 15,
//             accountname: "BAHL Bank AlHabib"
//         },
//         {
//             Id: 16,
//             accountname: "Allied Bank"
//         },
//         {
//             Id: 17,
//             accountname: "UBL Bank"
//         },
//         {
//             Id: 18,
//             accountname: "NayaPay"
//         },
//         {
//             Id: 19,
//             accountname: "Meezan Bank"
//         },

//     ]

//     beneficiaryTypeData: any = [
//         {
//             id: 0,
//             benname: "Meezan Bank"
//         },
//         {
//             id: 0,
//             benname: "Allied Bank"
//         },
//         {
//             id: 0,
//             benname: "JS Bank"
//         },
//         {
//             id: 0,
//             benname: "Alfalah Bank"
//         },
//         {
//             id: 0,
//             benname: "DIGI-BANK Bank"
//         },
//         {
//             id: 0,
//             benname: "NBP Bank"
//         },
//         {
//             id: 1,
//             benname: "Easypaisa"
//         },
//         {
//             id: 2,
//             benname: "Sadapay"
//         },
//     ];
//     // BankData: any = [
//     //     {
//     //         Id: 1,
//     //         bankname: "Meezan Bank"
//     //     },
//     //     {
//     //         Id: 2,
//     //         bankname: "Bank Alfalah"
//     //     },
//     //     {
//     //         Id: 3,
//     //         bankname: "ALied Bank"
//     //     },
//     //     {
//     //         Id: 4,
//     //         bankname: "JS Bank"
//     //     },
//     //     {
//     //         Id: 5,
//     //         bankname: "Naya Pay"
//     //     },
//     //     {
//     //         Id: 6,
//     //         bankname: "Sada Pay"
//     //     },
//     // ]
//     // TypeData: any = [
//     //     {
//     //         Id: 1,
//     //         forname: "Others"
//     //     },
//     //     {
//     //         Id: 2,
//     //         forname: "Card Bill Payment"
//     //     },
//     //     {
//     //         Id: 3,
//     //         forname: "Rental Payment"
//     //     },
//     //     {
//     //         Id: 4,
//     //         forname: "Hotel Payment"
//     //     },
//     //     {
//     //         Id: 5,
//     //         forname: "School and University Fee Payment"
//     //     },
//     //     {
//     //         Id: 6,
//     //         forname: "Donations or Charity"
//     //     },
//     //     {
//     //         Id: 7,
//     //         forname: "Supplier and Distributor Payment"
//     //     },
//     // ]
//     profileForm = new FormGroup({
//         amount: new FormControl('BalanceAMount'),
//     });
//     CurrentBal = 45000;
//     CurrentDisBal: any = 0;

//     handleAmountChange(enteredAmount: any) {

//         var NewBal = 0;
//         this.CurrentDisBal = this.CurrentBal;
//         if (enteredAmount > 0 && enteredAmount != "" && enteredAmount != '') {
//             this.CurrentDisBal = NewBal = this.CurrentBal - enteredAmount;
//         }
//     }
//     LableName: any = "Account/IBAN Number:";
//     toggleInput(value: any) {
//         debugger
//         if (value == '1') {
//             this.LableName = "Mobile Number (Easypaisa):";
//         }
//         else if (value == '2') {
//             this.LableName = "Mobile Number (Sadapay):";
//         }
//         else {
//             this.LableName = "Account/IBAN Number:";

//         }
//     }
//     Lable1Name: any = "Enter Passcode sent to your registered mobile number";

//     async OpenBeneficiaryModal() {
//         this.BeneficiaryModal.open();
//     }
//     async SuccessPopup() {
//         debugger
//         this.NewModal1.open('xs');
//     }
   
// }

import { Component,ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IcsModalComponent } from 'app/components/ics-modal/ics-modal.component';

@Component({
  selector: 'app-benificiary-management',
  templateUrl: './benificiary-management.component.html',
  styleUrls: ['./benificiary-management.component.scss']
})
export class BenificiaryManagementComponent {
  saveAndCloseButtonLabel: string = "Accept";
  @ViewChild('AddBeneficiaryModal') AddBeneficiaryModal: IcsModalComponent | any; 

  profileForm = new FormGroup({
    bankName: new FormControl(''),
    accountNumber: new FormControl(''),
    accountTitle: new FormControl(''),
    nickName: new FormControl('')
  });

  accountData: any[] = [
    { Id: 1, accountname: 'HBL Bank' },
    { Id: 2, accountname: 'Alfalah Bank' },
    { Id: 3, accountname: 'Meezan Bank' },
    { Id: 4, accountname: 'ALied Bank' },
    { Id: 5, accountname: 'JS Bank' },
    { Id: 6, accountname: 'Naya Pay' },
    { Id: 7, accountname: 'Sada Pay' },

  ];

  constructor() {}

  openAddBeneficiaryModal() {
    this.AddBeneficiaryModal.open();
  }

  closeModal() {
    this.AddBeneficiaryModal.close();
    this.profileForm.reset(); 
  }

  addBeneficiary() {
    console.log(this.profileForm.value); 
    this.profileForm.reset();

    this.closeModal();
  }

  onDropdownChange() {
    console.log('Selected bank:', this.profileForm.value.bankName);
  }
}


