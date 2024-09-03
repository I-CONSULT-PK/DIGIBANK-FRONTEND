import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { loginService } from './login.service';
import { Router } from '@angular/router';
import { IcsErrorComponent } from 'app/components/ics-error/ics-error.component';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent implements OnInit {
  constructor(private renderer: Renderer2, private formBuilder: FormBuilder, private loginService: loginService, private router: Router) { }
  @ViewChild('WhiteBannerBox') Box1: ElementRef | any;
  @ViewChild('WhiteBannerBox2') Box2: ElementRef | any;
  @ViewChild('CntrLogin') cntrLog: ElementRef | any;
  @ViewChild('CntrLogin2') cntrLog2: ElementRef | any;

  @ViewChild('navigation') navigation: ElementRef | any;



  @ViewChild('LogButton') LogButton: ElementRef | any;
  @ViewChild('SignupButton') SignupButton: ElementRef | any;

  @ViewChild('pageheaderimage') pageheaderimage: ElementRef | any;

  @ViewChild('copyright') copyright: ElementRef | any;

  @ViewChild('textContent') textContent: ElementRef | any;

  @ViewChild('IcsError') icserror: IcsErrorComponent | any;

  tittle: any = "Sign in to Your Account";

  SecurityImageArray: any = [];
  ImageIconsArray: any[] =
    [
      {
        id: 1,
        name: 'car',
        icon: 'fa fa-car',
        selected: false,
      },
      {
        id: 2,
        name: 'phone',
        icon: 'fa fa-phone',
        selected: false,
      },
      {
        id: 4,
        name: 'umbrella',
        icon: 'fa fa-umbrella',
        selected: false,
      },
      {
        id: 3,
        name: 'bicycle',
        icon: 'fa fa-bicycle',
        selected: false,
      },
      {
        id: 5,
        name: 'trophy',
        icon: 'fa fa-trophy',
        selected: false,
      },
      {
        id: 6,
        name: 'bell',
        icon: 'fa fa-bell',
        selected: false,
      },
      {
        id: 7,
        name: 'lightbulb',
        icon: 'fa fa-cutlery',
        selected: false,
      },
      {
        id: 8,
        name: 'plane',
        icon: 'fa fa-plane',
        selected: false,
      },
      {
        id: 9,
        name: 'paperclip',
        icon: 'fa fa-paperclip',
        selected: false,
      },
      {
        id: 10,
        name: 'tree',
        icon: 'fa fa-tree',
        selected: false,
      }
    ];
  async RemoveLoaclSTorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
  }
  myForm: FormGroup;

  ngOnInit() {
    this.RemoveLoaclSTorage();
    this.myForm = this.formBuilder.group({

      username: [''],
      password: [''],
    });
    this.SecurityImageArray = this.shuffleArray(this.ImageIconsArray);

  }
  shuffleArray(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  ClickToChange() {
    this.stepCounter = 1;

    this.renderer.setStyle(this.Box1.nativeElement, 'transform', 'translate(-100%)');
    this.renderer.setStyle(this.cntrLog.nativeElement, 'transform', 'translate(-100%)');


    this.renderer.setStyle(this.Box2.nativeElement, 'translate', '66.5% 0%');
    this.renderer.setStyle(this.cntrLog2.nativeElement, 'transform', 'translate(0%)');

    this.renderer.removeClass(this.navigation.nativeElement, 'justify-content-end');

    this.renderer.setStyle(this.SignupButton.nativeElement, 'visibility', 'hidden');
    this.renderer.setStyle(this.LogButton.nativeElement, 'visibility', 'visible');

    this.renderer.setStyle(this.pageheaderimage.nativeElement, 'background-image', "url('../../assets/img/Backgrounds/bg2.jpg')");

    this.renderer.setStyle(this.copyright.nativeElement, 'float', "left");

    this.renderer.setStyle(this.textContent.nativeElement, 'transform', "scale(1)");
    this.renderer.setStyle(this.textContent.nativeElement, 'visibility', "visible");

  }
  ClickToChangeLog() {
    this.renderer.setStyle(this.textContent.nativeElement, 'transform', "scale(0.3)");

    this.renderer.setStyle(this.textContent.nativeElement, 'visibility', "hidden");

    this.renderer.setStyle(this.Box1.nativeElement, 'transform', 'translate(0%)');
    this.renderer.setStyle(this.cntrLog.nativeElement, 'transform', 'translate(0%)');


    this.renderer.setStyle(this.Box2.nativeElement, 'translate', '-100% 0%');
    this.renderer.setStyle(this.cntrLog2.nativeElement, 'transform', 'translate(-220%)');

    this.renderer.addClass(this.navigation.nativeElement, 'justify-content-end');


    this.renderer.setStyle(this.SignupButton.nativeElement, 'visibility', 'visible');
    this.renderer.setStyle(this.LogButton.nativeElement, 'visibility', 'hidden');

    this.renderer.setStyle(this.pageheaderimage.nativeElement, 'background-image', "url('../../assets/img/Backgrounds/loginBack.avif')");

    this.renderer.setStyle(this.copyright.nativeElement, 'float', "right");


  }
  stepCounter: any = 1;
  async StepUp() {
    this.stepCounter++;
  }
  async StepDown() {
    this.stepCounter--;
  }
  // Model Variable For Login
  username: string = "";
  password: string = "";
  securityImage: string = "Plane";
  // -------------------------
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
  // Model Variable For Forget Password
  MobileNumber: string = "";
  Email: string = "";
  Fusername: string = "";
  ResetPassword: string = "";

  SelectedsecurityImage: any = '';
  async SelectSecurityImage(securityImage: any) {
    this.SelectedsecurityImage = '';
    this.SelectedsecurityImage = securityImage;
    this.ImageIconsArray.forEach((e: any) => {
      if (e.id == securityImage) {
        e.selected = true;
      }
      else {
        e.selected = false;
      }
    });
  }
  async LoginPost() {

    localStorage.setItem('IsUserLogin', JSON.stringify(false));
    var CreationDto: any = {
      emailorUsername: this.myForm.controls['username'].value,
      password: this.myForm.controls['password'].value,
      imageVerificationId: this.SelectedsecurityImage ? this.SelectedsecurityImage : 0,
    };
    const dto: any = await this.loginService.login(CreationDto);
    if (dto && dto.success && dto.success == true && dto.data) {
      localStorage.setItem('userInfo', JSON.stringify(dto.data));
      localStorage.setItem('token', JSON.stringify(dto.data.token ? dto.data.token : 'xxxxxxxxxxxxxxx'));

      if (dto.data.token) {
        localStorage.setItem('IsUserLogin', JSON.stringify(true));
      }
      else {
        localStorage.setItem('IsUserLogin', JSON.stringify(false));
      }
      this.router.navigate(["/Admin/maiden"])
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
  async getConcatedOTP() {
    var derived = this.input2 + this.input3 + this.input4 + this.input5 + this.input6 + this.input7;
    return derived;
  }


  input1: string = '';
  input2: string = '';
  input3: string = '';
  input4: string = '';
  input5: string = '';
  input6: string = '';
  input7: string = '';

  OTPInput: any;
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
  }

  ShowHide: any = false;
  async ShowHideFunc() {
    this.ShowHide = !this.ShowHide;
  }

  async ForgetNavigate(urlPath: any) {
    this.router.navigate(["/ForgetPassword/" + urlPath]);
  }
  async AddChildAccount() {
    this.router.navigate(["../add-child-account/add-child-account.component.html"])
  }
  async NavigateToCreate() {
    this.router.navigate(["/Signup"])
  }
}