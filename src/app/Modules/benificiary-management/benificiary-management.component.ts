import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IcsModalComponent } from 'app/components/ics-modal/ics-modal.component';
import { BenificiaryManagementService } from '../benificiary-management/benificiary-management.service'
import { IcsErrorComponent } from 'app/components/ics-error/ics-error.component';
import { DomSanitizer } from '@angular/platform-browser';
import { navbarService } from 'app/components/navbar/navbar.service';

@Component({
  selector: 'app-benificiary-management',
  templateUrl: './benificiary-management.component.html',
  styleUrls: ['./benificiary-management.component.scss']
})
export class BenificiaryManagementComponent implements OnInit {
  saveAndCloseButtonLabel: string = "Accept";
  @ViewChild('AddBeneficiaryModal') AddBeneficiaryModal: IcsModalComponent | any;
  @ViewChild('confirmationModal') confirmationModal?: IcsModalComponent;
  @ViewChild('IcsError') icserror?: IcsErrorComponent;
  beneficiaries: any[];
  isAmounthidden: boolean = false;
  isFavourite: boolean = false;
  accountNumber: string;
  myForm: FormGroup;
  isFavouriteData: boolean = false;
  selectedBankObject : any
  itemId: number
  accountDetails: any;
  benDetail: any
  customerId : number;
  accountData: any[] = [
    [{ Id: null, bankName: 'No bank available' }]
  ];

  constructor(private formBuilder: FormBuilder, private benificiaryManagementService: BenificiaryManagementService, private sanitizer: DomSanitizer, private navBarService: navbarService) { }

  async ngOnInit() {
    this.myForm = this.formBuilder.group({
      bankName: [''],
      accountNumber: [''],
      accountTitle: [''],
      alias: [''],
      mobileNumber: ['']
    });
    await this.getAllBeneficiaryList(116);
    await this.getBanks();
  }
  openAddBeneficiaryModal() {
    this.AddBeneficiaryModal.open();
  }

  closeModal() {
    this.AddBeneficiaryModal.close();
  }

  // addBeneficiary() {
  //   this.closeModal();
  // }

  onDropdownChange(bankName : any) {
    console.log('Selected bank:', bankName);
    console.log(this.accountData,"account data")
    const selectedBankObject = this.accountData.find(bank => bank.bankName === bankName);
    this.selectedBankObject = selectedBankObject
    console.log(selectedBankObject,"hello world")
  }

  addBeneficiary() {
    // console.log(this.profileForm.value);
    // this.profileForm.reset();
    // var NewBal = 0;
    // this.CurrentDisBal = this.CurrentBal;
    // if (enteredAmount > 0 && enteredAmount != "" && enteredAmount != '') {
    //   this.CurrentDisBal = NewBal = this.CurrentBal - enteredAmount;
    // }
  }
  LableName: any = "Account/IBAN Number:";
  toggleInput(value: any) {

    if (value == '1') {
      this.LableName = "Mobile Number (Easypaisa):";
    }
    else if (value == '2') {
      this.LableName = "Mobile Number (Sadapay):";
    }
    else {
      this.LableName = "Account/IBAN Number:";

      this.closeModal();
    }
  }

  // onDropdownChange() {
  //   console.log('Selected bank:', this.profileForm.value.bankName);
  // }
  // async OpenBeneficiaryModal() {
  //   this.BeneficiaryModal.open();
  // }
  async SuccessPopup() {

    // this.NewModal1.open('xs');
  }
  allBeneficiaryList: any = [];
  async getAllBeneficiaryList(CreationDto: any) { 
    const dto: any = await this.benificiaryManagementService.getAllBeneficiaries(CreationDto,true);
    if (dto && dto.success && dto.success == true && dto.data && dto.data.length > 0) {
      this.allBeneficiaryList = dto.data;
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

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openDeleteConfirmationModal(id: any) {
    this.confirmationModal.open('sm', true);
    if (this.itemId) {
      this.itemId = id
      console.log(this.itemId)
      this.confirmationModal.open()
    }
  }

  async handleDeleteConfirmation() {
    console.log("hello world")
    if (this.itemId) {
      console.log("hello world2", this.itemId)
      await this.benificiaryManagementService.deleteBenificiary(this.itemId);
      await this.getAllBeneficiaries();
    }
  }

  async getBanks() {
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
    const dto: any = await this.benificiaryManagementService.fetchAccountDetails(this.myForm.controls['accountNumber'].value);
    if (dto && dto.success && dto.data) {
      this.benDetail = dto.data;
      console.log(this.benDetail,"account Data")
      const accountTittle = dto.data.accountTitle;
      this.customerId = dto.data.customerId
      console.log(this.customerId,"customer id")
      console.log(accountTittle, "account number")
      this.myForm.get('accountTitle')?.setValue(accountTittle);
      console.log(this.myForm.controls['accountTitle'].value)
      console.log(this.benDetail, "hello world")
    } else {
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

  async addBenificiary() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const customerId = userInfo.customerId;
    console.log(customerId,"customer Id");
    console.log("hello world")
    console.log(this.selectedBankObject,"selected object");
    const bankLogo = this.selectedBankObject.bankLogo
    var CreationDto: any = {
      beneficiaryAlias: this.myForm.controls['alias']?.value,
      accountNumber: this.myForm.controls['accountNumber']?.value,
      beneficiaryBankName: this.myForm.controls['bankName']?.value,
      mobileNumber: this.myForm.controls['mobileNumber']?.value,
      categoryType: 'individual',
      customerId : customerId,
      bankUrl :  bankLogo
    };
    console.log(CreationDto,"hello world")
    console.log(this.myForm.controls)
    const dto: any = await this.benificiaryManagementService.createBenificiary(CreationDto);
    if (dto && dto.success && dto.success == true && dto.data) {
      console.log("success")
      this.closeModal();
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
}


