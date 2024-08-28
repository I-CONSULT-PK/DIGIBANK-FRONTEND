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

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IcsModalComponent } from 'app/components/ics-modal/ics-modal.component';
import { BenificiaryManagementService } from './benificiary-management.service';
import { DomSanitizer } from '@angular/platform-browser';
import { navbarService } from 'app/components/navbar/navbar.service';
import { IcsErrorComponent } from 'app/components/ics-error/ics-error.component';

@Component({
  selector: 'app-benificiary-management',
  templateUrl: './benificiary-management.component.html',
  styleUrls: ['./benificiary-management.component.scss']
})
export class BenificiaryManagementComponent implements OnInit {
  saveAndCloseButtonLabel: string = "Accept";
  @ViewChild('AddBeneficiaryModal') AddBeneficiaryModal: IcsModalComponent | any;
  @ViewChild('confirmationModal') confirmationModal?: IcsModalComponent;
  @ViewChild('icserror') icserror?: IcsErrorComponent;
  beneficiaries: any[];
  isAmounthidden: boolean = false;
  isFavourite: boolean = false;
  accountNumber: string;
  profileForm: FormGroup;
  isFavouriteData: boolean = false;


  accountData: any[] = [
    [{ Id: null, bankName: 'No bank available' }]
    // { Id: 1, accountname: 'HBL Bank' },
    // { Id: 2, accountname: 'Alfalah Bank' },
    // { Id: 3, accountname: 'Meezan Bank' },
    // { Id: 4, accountname: 'ALied Bank' },
    // { Id: 5, accountname: 'JS Bank' },
    // { Id: 6, accountname: 'Naya Pay' },
    // { Id: 7, accountname: 'Sada Pay' },

  ];

  constructor(private benificiaryManagementService: BenificiaryManagementService, private sanitizer: DomSanitizer, private navBarService: navbarService) { }
  async ngOnInit() {
    this.profileForm = new FormGroup({
      bankName: new FormControl(''),
      accountNumber: new FormControl(''),
      accountTitle: new FormControl(''),
      nickName: new FormControl('')
    });
    // this.getAllBeneficiaries();
    await this.getBanks();
  }
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
  async getAllBeneficiaries() {
    const userData = localStorage.getItem('userInfo');
    if (userData) {
      const user = JSON.parse(userData);
      console.log('Logged in user:', user);
      console.log('customerId:', user.customerId);
      const dto: any = await this.benificiaryManagementService.getAllBeneficiaries(user.customerId, this.isFavouriteData);
      this.beneficiaries = dto.data;
      console.log(this.beneficiaries, "hello world")

    }
  }

  addToFavourite() {
    this.isFavourite = !this.isFavourite;
  }

  // toggleFavourite(id: number): void {
  //   // Find the beneficiary by ID
  //   const foundBeneficiary = this.beneficiaries.find(b => b.id === id);
  //   if (foundBeneficiary) {
  //     foundBeneficiary.isFavourite = !foundBeneficiary.isFavourite;

  //     // Optionally, update the favorites list in a service or local storage
  //     // this.updateFavorites(foundBeneficiary);
  //   }
  // }
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  itemId: number
  openDeleteConfirmationModal(id: any) {
    // Set up and open the modal
    // this.confirmationModal.message = 'Are you sure you want to delete this beneficiary?';
    // this.confirmationModal.confirmButtonLabel = 'Delete';
    // this.confirmationModal.cancelButtonLabel = 'Cancel';

    this.confirmationModal.open('sm', true);
    if (this.itemId) {
      this.itemId = id
      console.log(this.itemId)
      this.confirmationModal.open()
    }
  }

  async handleDeleteConfirmation() {
    console.log("hello world")
    // if (confirm) {
    if (this.itemId) {
      console.log("hello world2", this.itemId)
      await this.benificiaryManagementService.deleteBenificiary(this.itemId);
      await this.getAllBeneficiaries();
    }
  }
  // }
  accountDetails: any;
  async getBanks() {
    //  const dto:any = await this.navBarService.getBanks();
    // this.accountData = dto.data;
    // console.log(this.accountData,"account data")
    const dto = await this.navBarService.getBanks();
    if (dto && dto.success && dto.success == true && dto.data) {
      this.accountData = dto.data;
    }
    else {
      if (dto && dto.data && dto.data.errors && dto.data.errors.length > 0) {
        this.icserror.showErrors(dto.data.errors, 'Error', 4);
      }
      else {
        if (dto && dto.message) {
          this.icserror.showErrors(dto.message, 'Error', 4);
        }
        else {
          this.icserror.showErrors('Some Thing Wents Wrong', 'Error', 4);
        }
      }
    }
  }
  async saveAccountNumber() {
    console.log(this.profileForm, "form ")
    console.log(this.profileForm.get('accountNumber')?.value)
    const dto: any = await this.benificiaryManagementService.fetchAccountDetails(this.profileForm.get('accountNumber')?.value)
    console.log(dto, "account details")
  }

  columnDefs = [
    {
      headerName: 'Description',
      field: 'beneficiaryName',
      cellRenderer: (params) => {
        return `
          <div class="d-flex justify-content-start align-items-center">
            <div class="bank-logo">
              <img class="w-100" src="../../../assets/img/digibank-logo.png" alt="">
            </div>
            <div class="text-center mx-2 fs-15px">${params.value}</div>
          </div>`;
      },
    },
    { headerName: 'Banks', field: 'beneficiaryBankName' },
    { headerName: 'Account Number', field: 'accountNumber' },
    { headerName: 'Date', valueGetter: () => '28 Jan 2024' },
    { headerName: 'Amount', valueGetter: () => 'Rs.2800' },
    {
      headerName: 'Action',
      cellRenderer: (params) => {
        return `
          <div class="d-flex flex-row gap-2">
            <div class="px-2 py-1 border rounded-circle shadow-sm cursor-pointer">
              <i class="far fa-heart"></i>
            </div> 
            <div class="px-2 py-1 border rounded-circle shadow-sm cursor-pointer">
              <i class="fas fa-edit fav-icon"></i>
            </div>
            <div class="px-2 py-1 border rounded-circle shadow-sm cursor-pointer">
              <i class="fas fa-trash-alt fav-icon"></i>
            </div>
          </div>`;
      },
    },
  ];

}


