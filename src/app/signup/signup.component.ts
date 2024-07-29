import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { signupService } from "./signup.service";
import { IcsErrorComponent } from "app/components/ics-error/ics-error.component";
import { FormBuilder, FormGroup } from "@angular/forms";
import { otpService } from "app/components/otp-verification/otp-verification.service";
import { OtpVerificationComponent } from "app/components/otp-verification/otp-verification.component";
import { IcsModalComponent } from "app/components/ics-modal/ics-modal.component";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class signupComponent implements OnInit {
  saveAndCloseButtonLabel: string = 'Accept';
  closeButtonLabel: string = 'Decline';

  constructor(
    private router: Router,
    private signupService: signupService,
    private formBuilder: FormBuilder,
    private otpService: otpService
  ) {}
  myForm: FormGroup;
  // Model Variable For Signup
  UserCnic: string = "";
  UserMobile: string = "";
  UserAccountno: string = "";
  FirstName: string = "";
  LastName: string = "";
  UserEmail: string = "";
  Userusername: string = "";
  UserPassword: string = "";
  UserRetypepass: string = "";
  // -------------------------
  @ViewChild("IcsError") dcserror: IcsErrorComponent | any;
  @ViewChild("otpInput") otpInput: OtpVerificationComponent | any;
  @ViewChild('openTermsConditionsModal') opentCModal: IcsModalComponent | any;

  isTraDisabled: boolean = true;
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      cnic: [""],
      accountnumber: [""],
      mobileNumber: [""], //, Validators.pattern(/^\d{10}$/)

      firstName: [""],
      lastName: [""],
      email: [""],

      username: [""],
      password: [""],
    });
  }
  tittle: any = "Make Your Account";
  activityModemStep: any = 4;
  async NextActivity(activityModem: any) {
    debugger;
    this.activityModemStep = activityModem;
    if (activityModem == 1) {
      this.tittle = "Make Your Account";
    } else if (activityModem == 2) {
      this.tittle = "Your Personal Information";
    } else if (activityModem == 3) {
      this.tittle = "OTP Verification";
    } else if (activityModem == 5) {
      this.gotoLogin();
    } else {
      this.tittle = "Set Your Account Credentials";
    }
  }

  openTermsConditionsModalFunc() {
    if (this.opentCModal) {
      this.opentCModal.Caption = "Terms and Conditions";
      this.opentCModal.closeButtonLabel = this.closeButtonLabel;
      this.opentCModal.saveAndCloseButtonLabel = this.saveAndCloseButtonLabel;
      this.opentCModal.open();
    }
  }

  async AcceptTnC() {
    this.isTraDisabled = false;
    if (this.opentCModal) {
      this.opentCModal.closeModal(); 
    }
  }
  
  async DeclineTnC() {
    if (this.opentCModal) {
      this.opentCModal.closeModal(); 
    }
  }
  
  
  async checkStrength(password: any) {
    debugger;
    var strength = 0;

    //If password contains both lower and uppercase characters, increase strength value.
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      strength += 2;
      $(".low-upper-case").addClass("text-success");
      $(".low-upper-case i").removeClass("fa-times").addClass("fa-check");
      $("#popover-password-top").addClass("hide");
    } else {
      $(".low-upper-case").removeClass("text-success");
      $(".low-upper-case i").addClass("fa-times").removeClass("fa-check");
      $("#popover-password-top").removeClass("hide");
    }

    //If it has numbers and characters, increase strength value.
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
      strength += 4;
      $(".one-number").addClass("text-success");
      $(".one-number i").removeClass("fa-times").addClass("fa-check");
      $("#popover-password-top").addClass("hide");
    } else {
      $(".one-number").removeClass("text-success");
      $(".one-number i").addClass("fa-times").removeClass("fa-check");
      $("#popover-password-top").removeClass("hide");
    }

    //If it has one special character, increase strength value.
    // if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
    //   strength += 1;
    //   $('.one-special-char').addClass('text-success');
    //   $('.one-special-char i').removeClass('fa-times').addClass('fa-check');
    //   $('#popover-password-top').addClass('hide');

    // } else {
    //   $('.one-special-char').removeClass('text-success');
    //   $('.one-special-char i').addClass('fa-times').removeClass('fa-check');
    //   $('#popover-password-top').removeClass('hide');
    // }

    if (password.length > 7) {
      strength += 4;
      $(".eight-character").addClass("text-success");
      $(".eight-character i").removeClass("fa-times").addClass("fa-check");
      $("#popover-password-top").addClass("hide");
    } else {
      $(".eight-character").removeClass("text-success");
      $(".eight-character i").addClass("fa-times").removeClass("fa-check");
      $("#popover-password-top").removeClass("hide");
    }

    // If value is less than 2

    if (strength < 4) {
      $("#result").removeClass();
      $("#password-strength").addClass("progress-bar-danger");

      $("#result").addClass("text-danger").text("Very Week");
      $("#password-strength").css("width", "10%");
    } else if (strength == 8) {
      $("#result").addClass("good");
      $("#password-strength").removeClass("progress-bar-danger");
      $("#password-strength").addClass("progress-bar-warning");
      $("#result").addClass("text-warning").text("Week");
      $("#password-strength").css("width", "60%");
      return "Week";
    } else if (strength == 10) {
      $("#result").removeClass();
      $("#result").addClass("strong");
      $("#password-strength").removeClass("progress-bar-warning");
      $("#password-strength").addClass("progress-bar-success");
      $("#result").addClass("text-success").text("Strength");
      $("#password-strength").css("width", "100%");

      return "Strong";
    }
  }

  GlobalDto: any = {};
  async VerifyCustomer() {
    this.GlobalDto = {};
    debugger;
    var CreationDto: any = {};
    CreationDto = {
      globalId: {
        cnicNumber: this.myForm.controls["cnic"].value,
      },
      account: {
        accountNumber: this.myForm.controls["accountnumber"].value,
      },
      customer: {
        mobileNumber: this.myForm.controls["mobileNumber"].value,
      },
    };
    const dto: any = await this.signupService.VerifyCustomerV2(CreationDto);
    if (dto && dto.success && dto.success == true && dto.data) {
      this.GlobalDto.UserCnic = this.myForm.controls["cnic"].value;
      this.GlobalDto.UserMobile = this.myForm.controls["mobileNumber"].value;
      this.GlobalDto.UserAccountno =
        this.myForm.controls["accountnumber"].value;
      this.GlobalDto.FirstName = dto.data.customer.firstName;
      this.GlobalDto.LastName = dto.data.customer.lastName;
      this.GlobalDto.UserEmail = dto.data.email;

      debugger;

      this.myForm.controls["firstName"].setValue(dto.data.customer.firstName);
      this.myForm.controls["lastName"].setValue(dto.data.customer.lastName);
      this.myForm.controls["email"].setValue(dto.data.email);
      await this.NextActivity(2);
    } else {
      if (dto && dto.data && dto.data.errors && dto.data.errors.length > 0) {
        this.dcserror.showErrors(dto.data.errors, "Error", 4);
      } else {
        if (dto && dto.message) {
          this.dcserror.showErrors(dto.message, "Error", 4);
        } else {
          this.dcserror.showErrors("Some Thing Wents Wrong", "Error", 4);
        }
      }
    }
  }
  async CreateOTP() {
    debugger;
    var CreationDto: any = {};
    CreationDto = {
      mobileNumber: this.myForm.controls["mobileNumber"].value,
      email: this.myForm.controls["email"].value,
      reason: "Verify Mobile Device",
    };
    const dto: any = await this.otpService.OTPCreation(CreationDto);
    if (dto && dto.success && dto.success == true) {
      debugger;
      await this.NextActivity(3);
    } else {
      if (dto && dto.data && dto.data.errors && dto.data.errors.length > 0) {
        this.dcserror.showErrors(dto.data.errors, "Error", 4);
      } else {
        if (dto && dto.message) {
          this.dcserror.showErrors(dto.message, "Error", 4);
        } else {
          this.dcserror.showErrors("Some Thing Wents Wrong", "Error", 4);
        }
      }
    }
  }
  async VerifyOTP() {
    debugger;
    this.otpInput;
    var CreationDto: any = {};
    CreationDto = {
      mobileNumber: this.myForm.controls["mobileNumber"].value,
      email: this.myForm.controls["email"].value,
      emailOtp: this.otpInput && this.otpInput.value ? this.otpInput.value : "",
    };
    const dto: any = await this.otpService.OTPVerify(CreationDto);
    if (dto && dto.success && dto.success == true) {
      debugger;
      await this.NextActivity(4);
    } else {
      if (dto && dto.data && dto.data.errors && dto.data.errors.length > 0) {
        this.dcserror.showErrors(dto.data.errors, "Error", 4);
      } else {
        if (dto && dto.message) {
          this.dcserror.showErrors(dto.message, "Error", 4);
        } else {
          this.dcserror.showErrors("Some Thing Wents Wrong", "Error", 4);
        }
      }
    }
  }
  SelectedsecurityImage: any;
  async SignupPost() {
    var CreationDto: any = {};
    CreationDto = {
      cnic: this.GlobalDto.UserCnic,
      mobileNumber: this.GlobalDto.UserMobile,
      accountNumber: this.GlobalDto.UserAccountno,
      firstName: this.GlobalDto.FirstName,
      lastName: this.GlobalDto.LastName,
      email: this.GlobalDto.UserEmail,
      userName: this.myForm.controls["username"].value,
      password: this.myForm.controls["password"].value,
      securityPicture: this.SelectedsecurityImage
        ? this.SelectedsecurityImage
        : "cat",
    };
    debugger;
    const dto: any = await this.signupService.RegisterCustomerV2(CreationDto);
    if (dto && dto.success && dto.success == true) {
      // const OTPdto: any = await this.OPTCreationPost();
      await this.gotoLogin();
    } else {
      if (dto && dto.data && dto.data.errors && dto.data.errors.length > 0) {
        this.dcserror.showErrors(dto.data.errors, "Error", 4);
      } else {
        if (dto && dto.message) {
          this.dcserror.showErrors(dto.message, "Error", 4);
        } else {
          this.dcserror.showErrors("Some Thing Wents Wrong", "Error", 4);
        }
      }
    }
  }

  async gotoLogin() {
    this.router.navigate(["/login"]);
  }
}
