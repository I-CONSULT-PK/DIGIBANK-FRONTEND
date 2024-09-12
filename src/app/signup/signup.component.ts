import { Component, OnInit, Renderer2, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { signupService } from "./signup.service";
import { IcsErrorComponent } from "app/components/ics-error/ics-error.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { otpService } from "app/components/otp-verification/otp-verification.service";
import { OtpVerificationComponent } from "app/components/otp-verification/otp-verification.component";
import { IcsModalComponent } from "app/components/ics-modal/ics-modal.component";
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class signupComponent implements OnInit {
  saveAndCloseButtonLabel: string = "Accept";
  closeButtonLabel: string = "Decline";

  constructor(
    private router: Router,
    private formBuilder: FormBuilder, // Keep this one
    private signupService: signupService,
    private otpService: otpService,
    private renderer: Renderer2
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
  // @ViewChild("IcsError") icserror: IcsErrorComponent | any;
  @ViewChild("IcsError") icserror: IcsErrorComponent | any;
  @ViewChild("otpInput") otpInput: OtpVerificationComponent | any;
  @ViewChild("openTermsConditionsModal") opentCModal: IcsModalComponent | any;

  isTraDisabled: boolean = true;
  ngOnInit() {
    this.myForm = this.formBuilder.group(
      {
        cnic: [""],
        accountnumber: [""],
        mobileNumber: [""], //, Validators.pattern(/^\d{10}$/)

        firstName: [""],
        lastName: [""],
        email: [""],

        username: [""],
        password: [""],
        confirmPassword: [""],
      },
      {
        validator: PasswordMatchValidator("password", "confirmPassword"),
      }
    );
    this.passwordForm = this.formBuilder.group(
      {
        password: ["", [Validators.required]],
        confirmPassword: ["", [Validators.required]],
      },
      {
        validator: PasswordMatchValidator("password", "confirmPassword"),
      }
    );
  }
  ngAfterViewInit(): void {
    try {
      ($('#draggable-element') as any).draggable();
    } catch (error) {
      console.error('Error initializing jQuery UI draggable:', error);
    }
  }
  passwordForm: FormGroup;
  passwordFieldType: string = "password";
  confirmPasswordFieldType: string = "password";

  togglePasswordVisibility(): void {
    this.passwordFieldType =
      this.passwordFieldType === "password" ? "text" : "password";
  }

  toggleConfirmPasswordVisibility(): void {
    this.confirmPasswordFieldType =
      this.confirmPasswordFieldType === "password" ? "text" : "password";
  }
  // Check password match and set box shadow
  get confirmPasswordControl() {
    return this.myForm.get("confirmPassword");
  }

  get passwordControl() {
    return this.myForm.get("password");
  }

  getConfirmPasswordClass() {
    if (this.myForm.get("confirmPassword").touched) {
      return this.myForm.get("confirmPassword").errors?.passwordMismatch
        ? "box-shadow: 0 0 5px red;"
        : "box-shadow: 0 0 5px green;";
    }
    return "";
  }

  tittle: any = "Make Your Account";
  activityModemStep: any = 1;
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
  // async checkStrength(password: any) {
  //   debugger;
  //   var strength = 0;

  //   //If password contains both lower and uppercase characters, increase strength value.
  //   if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
  //     strength += 2;
  //     $(".low-upper-case").addClass("text-success");
  //     $(".low-upper-case i").removeClass("fa-times").addClass("fa-check");
  //     $("#popover-password-top").addClass("hide");
  //   } else {
  //     $(".low-upper-case").removeClass("text-success");
  //     $(".low-upper-case i").addClass("fa-times").removeClass("fa-check");
  //     $("#popover-password-top").removeClass("hide");
  //   }

  //   //If it has numbers and characters, increase strength value.
  //   if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
  //     strength += 4;
  //     $(".one-number").addClass("text-success");
  //     $(".one-number i").removeClass("fa-times").addClass("fa-check");
  //     $("#popover-password-top").addClass("hide");
  //   } else {
  //     $(".one-number").removeClass("text-success");
  //     $(".one-number i").addClass("fa-times").removeClass("fa-check");
  //     $("#popover-password-top").removeClass("hide");
  //   }

  //   //If it has one special character, increase strength value.
  //   // if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
  //   //   strength += 1;
  //   //   $('.one-special-char').addClass('text-success');
  //   //   $('.one-special-char i').removeClass('fa-times').addClass('fa-check');
  //   //   $('#popover-password-top').addClass('hide');

  //   // } else {
  //   //   $('.one-special-char').removeClass('text-success');
  //   //   $('.one-special-char i').addClass('fa-times').removeClass('fa-check');
  //   //   $('#popover-password-top').removeClass('hide');
  //   // }

  //   if (password.length > 7) {
  //     strength += 4;
  //     $(".eight-character").addClass("text-success");
  //     $(".eight-character i").removeClass("fa-times").addClass("fa-check");
  //     $("#popover-password-top").addClass("hide");
  //   } else {
  //     $(".eight-character").removeClass("text-success");
  //     $(".eight-character i").addClass("fa-times").removeClass("fa-check");
  //     $("#popover-password-top").removeClass("hide");
  //   }

  //   // If value is less than 2

  //   if (strength < 4) {
  //     $("#result").removeClass();
  //     $("#password-strength").addClass("progress-bar-danger");

  //     $("#result").addClass("text-danger").text("Very Week");
  //     $("#password-strength").css("width", "10%");
  //   } else if (strength == 8) {
  //     $("#result").addClass("good");
  //     $("#password-strength").removeClass("progress-bar-danger");
  //     $("#password-strength").addClass("progress-bar-warning");
  //     $("#result").addClass("text-warning").text("Week");
  //     $("#password-strength").css("width", "60%");
  //     return "Week";
  //   } else if (strength == 10) {
  //     $("#result").removeClass();
  //     $("#result").addClass("strong");
  //     $("#password-strength").removeClass("progress-bar-warning");
  //     $("#password-strength").addClass("progress-bar-success");
  //     $("#result").addClass("text-success").text("Strength");
  //     $("#password-strength").css("width", "100%");

  //     return "Strong";
  //   }
  // }
  async checkStrength(password: string) {
    let strength = 0;

    // If password contains both lower and uppercase characters, increase strength value.
    const lowUpperCaseElement = document.querySelector('.low-upper-case');
    const lowUpperCaseIcon = lowUpperCaseElement?.querySelector('i');
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      strength += 2;
      if (lowUpperCaseElement) {
        lowUpperCaseElement.classList.add('text-success');
        if (lowUpperCaseIcon) {
          lowUpperCaseIcon.classList.remove('fa-times');
          lowUpperCaseIcon.classList.add('fa-check');
        }
        this.renderer.addClass(lowUpperCaseElement, 'hide');
      }
    } else {
      if (lowUpperCaseElement) {
        lowUpperCaseElement.classList.remove('text-success');
        if (lowUpperCaseIcon) {
          lowUpperCaseIcon.classList.add('fa-times');
          lowUpperCaseIcon.classList.remove('fa-check');
        }
        this.renderer.removeClass(lowUpperCaseElement, 'hide');
      }
    }

    // If it has numbers and characters, increase strength value.
    const oneNumberElement = document.querySelector('.one-number');
    const oneNumberIcon = oneNumberElement?.querySelector('i');
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
      strength += 4;
      if (oneNumberElement) {
        oneNumberElement.classList.add('text-success');
        if (oneNumberIcon) {
          oneNumberIcon.classList.remove('fa-times');
          oneNumberIcon.classList.add('fa-check');
        }
        this.renderer.addClass(oneNumberElement, 'hide');
      }
    } else {
      if (oneNumberElement) {
        oneNumberElement.classList.remove('text-success');
        if (oneNumberIcon) {
          oneNumberIcon.classList.add('fa-times');
          oneNumberIcon.classList.remove('fa-check');
        }
        this.renderer.removeClass(oneNumberElement, 'hide');
      }
    }

    // Uncomment if special character check is needed
    // const oneSpecialCharElement = document.querySelector('.one-special-char');
    // const oneSpecialCharIcon = oneSpecialCharElement?.querySelector('i');
    // if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
    //   strength += 1;
    //   if (oneSpecialCharElement) {
    //     oneSpecialCharElement.classList.add('text-success');
    //     if (oneSpecialCharIcon) {
    //       oneSpecialCharIcon.classList.remove('fa-times');
    //       oneSpecialCharIcon.classList.add('fa-check');
    //     }
    //     this.renderer.addClass(oneSpecialCharElement, 'hide');
    //   }
    // } else {
    //   if (oneSpecialCharElement) {
    //     oneSpecialCharElement.classList.remove('text-success');
    //     if (oneSpecialCharIcon) {
    //       oneSpecialCharIcon.classList.add('fa-times');
    //       oneSpecialCharIcon.classList.remove('fa-check');
    //     }
    //     this.renderer.removeClass(oneSpecialCharElement, 'hide');
    //   }
    // }

    // If length is greater than 7, increase strength value.
    const eightCharacterElement = document.querySelector('.eight-character');
    const eightCharacterIcon = eightCharacterElement?.querySelector('i');
    if (password.length > 7) {
      strength += 4;
      if (eightCharacterElement) {
        eightCharacterElement.classList.add('text-success');
        if (eightCharacterIcon) {
          eightCharacterIcon.classList.remove('fa-times');
          eightCharacterIcon.classList.add('fa-check');
        }
        this.renderer.addClass(eightCharacterElement, 'hide');
      }
    } else {
      if (eightCharacterElement) {
        eightCharacterElement.classList.remove('text-success');
        if (eightCharacterIcon) {
          eightCharacterIcon.classList.add('fa-times');
          eightCharacterIcon.classList.remove('fa-check');
        }
        this.renderer.removeClass(eightCharacterElement, 'hide');
      }
    }

    // Update the password strength indicator based on the strength value.
    this.updatePasswordStrengthIndicator(strength);
  }

  private updatePasswordStrengthIndicator(strength: number) {
    const result = document.getElementById('result');
    const passwordStrength = document.getElementById('password-strength');

    if (result && passwordStrength) {
      if (strength < 4) {
        result.classList.remove('text-warning', 'text-success');
        result.classList.add('text-danger');
        result.textContent = 'Very Weak';
        passwordStrength.classList.add('progress-bar-danger');
        passwordStrength.classList.remove('progress-bar-warning', 'progress-bar-success');
        passwordStrength.style.width = '10%';
      } else if (strength === 8) {
        result.classList.remove('text-danger', 'text-success');
        result.classList.add('text-warning');
        result.textContent = 'Weak';
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-danger', 'progress-bar-success');
        passwordStrength.style.width = '60%';
      } else if (strength === 10) {
        result.classList.remove('text-danger', 'text-warning');
        result.classList.add('text-success');
        result.textContent = 'Strong';
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger', 'progress-bar-warning');
        passwordStrength.style.width = '100%';
      }
    }
  }

  GlobalDto: any = {};
  async VerifyCustomer() {
    console.log("hello world")
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
        this.icserror.showErrors(dto.data.errors, "Error", 4);
      } else {
        if (dto && dto.message) {
          this.icserror.showErrors(dto.message, "Error", 4);
        } else {
          this.icserror.showErrors("Some Thing Wents Wrong", "Error", 4);
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
        this.icserror.showErrors(dto.data.errors, "Error", 4);
      } else {
        if (dto && dto.message) {
          this.icserror.showErrors(dto.message, "Error", 4);
        } else {
          this.icserror.showErrors("Some Thing Wents Wrong", "Error", 4);
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
        this.icserror.showErrors(dto.data.errors, "Error", 4);
      } else {
        if (dto && dto.message) {
          this.icserror.showErrors(dto.message, "Error", 4);
        } else {
          this.icserror.showErrors("Some Thing Wents Wrong", "Error", 4);
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
        this.icserror.showErrors(dto.data.errors, "Error", 4);
      } else {
        if (dto && dto.message) {
          this.icserror.showErrors(dto.message, "Error", 4);
        } else {
          this.icserror.showErrors("Some Thing Wents Wrong", "Error", 4);
        }
      }
    }
  }

  async gotoLogin() {
    this.router.navigate(["/login"]);
  }
}
export function PasswordMatchValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.passwordMismatch) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ passwordMismatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
