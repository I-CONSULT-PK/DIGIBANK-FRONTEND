import { userprofileService } from './user-profile.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IcsModalComponent } from 'app/components/ics-modal/ics-modal.component';
@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @ViewChild('Modal1') modal: IcsModalComponent | any;
  @ViewChild('NewModal1') NewModal1: IcsModalComponent | any;

  @ViewChild('BeneficiaryModal') BeneficiaryModal: IcsModalComponent | any;
  @ViewChild('SecurityImageModal') SecurityImageModal: IcsModalComponent | any;
  @ViewChild('ChangespasscodeModal') ChangespasscodeModal : IcsModalComponent | any;
  @ViewChild('TrustedDevicesModal') TrustedDevicesModal : IcsModalComponent | any;
  @ViewChild('CutomerInfoupdateModal') CutomerInfoupdateModal : IcsModalComponent | any;

  myForm: FormGroup;
  userData: any;
  // BeneficiaryModal: any;
  constructor(private formBuilder: FormBuilder, private userProfService: userprofileService) {
    this.myForm = this.formBuilder.group({
      accountType: [''],
      cnic: ['', Validators.required],
      occupation: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      maritalStatus: [''],
      mobileNumber: ['', Validators.pattern(/^\d{10}$/)],
      dateOfBirth: [''],
      residentialAddress: [''],
      city: [''],
      country: [''],
      expiryDate: ['']
    });
  }
  showPassword = false;

  async ngOnInit() {
    await this.getUserData(9);
  }
  async getUserData(empid: any) {
    const dto = await this.userProfService.getCustomerById('10');
    if (dto && dto.success && dto.success == true && dto.data && dto.data != null) {
      this.userData = dto.data;

      this.myForm.controls['cnic'].setValue(this.userData.cnic);
      this.myForm.controls['firstName'].setValue(this.userData.firstName);
      this.myForm.controls['lastName'].setValue(this.userData.lastName);
      this.myForm.controls['mobileNumber'].setValue(this.userData.mobileNumber);
      this.myForm.controls['email'].setValue(this.userData.email);
      this.myForm.controls['userName'].setValue(this.userData.userName);
      this.myForm.controls['password'].setValue(this.userData.password);
    }
  }
  async OpenBeneficiaryModal() {
    this.BeneficiaryModal.open('md');
  }
  async OpenSecurityImageModal(){
    this.SecurityImageModal.open('md');
  }
  async OpenChangespasscodeModal(){
    this.ChangespasscodeModal.open('md');
  }
  async OpenTrustedDevicesModal(){
    this.TrustedDevicesModal.open('md');
  }
  async OpenCutomerInfoupdateModal(){
    this.CutomerInfoupdateModal.open('md');
  }
  async SuccessPopup() {
    
    this.NewModal1.open('sm');
  }

  ShowHide: any = false;
  async ShowHideFunc() {
    this.ShowHide = !this.ShowHide;
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

    }
  }
};

