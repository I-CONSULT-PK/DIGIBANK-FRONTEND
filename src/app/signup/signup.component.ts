import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class signupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  tittle: any = "Make Your Account";
  activityModemStep: any = 1;
  async NextActivity(activityModem: any) {
    this.activityModemStep = activityModem;
    if (activityModem == 1) {
      this.tittle = "Make Your Account";
    }
    else if (activityModem == 2) {
      this.tittle = "Your Personal Information";
    }
    else if (activityModem == 3) {
      this.tittle = "OTP Verification";
    }
    else if (activityModem == 5) {
      this.gotoLogin();
    }
    else {
      this.tittle = "Set Your Account Credentials";
    }
  }

  async checkStrength(password: any) {
    debugger
    var strength = 0;


    //If password contains both lower and uppercase characters, increase strength value.
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      strength += 2;
      $('.low-upper-case').addClass('text-success');
      $('.low-upper-case i').removeClass('fa-times').addClass('fa-check');
      $('#popover-password-top').addClass('hide');


    } else {
      $('.low-upper-case').removeClass('text-success');
      $('.low-upper-case i').addClass('fa-times').removeClass('fa-check');
      $('#popover-password-top').removeClass('hide');
    }

    //If it has numbers and characters, increase strength value.
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
      strength += 4;
      $('.one-number').addClass('text-success');
      $('.one-number i').removeClass('fa-times').addClass('fa-check');
      $('#popover-password-top').addClass('hide');

    } else {
      $('.one-number').removeClass('text-success');
      $('.one-number i').addClass('fa-times').removeClass('fa-check');
      $('#popover-password-top').removeClass('hide');
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
      $('.eight-character').addClass('text-success');
      $('.eight-character i').removeClass('fa-times').addClass('fa-check');
      $('#popover-password-top').addClass('hide');

    } else {
      $('.eight-character').removeClass('text-success');
      $('.eight-character i').addClass('fa-times').removeClass('fa-check');
      $('#popover-password-top').removeClass('hide');
    }




    // If value is less than 2

    if (strength < 4) {
      $('#result').removeClass()
      $('#password-strength').addClass('progress-bar-danger');

      $('#result').addClass('text-danger').text('Very Week');
      $('#password-strength').css('width', '10%');
    } else if (strength == 8) {
      $('#result').addClass('good');
      $('#password-strength').removeClass('progress-bar-danger');
      $('#password-strength').addClass('progress-bar-warning');
      $('#result').addClass('text-warning').text('Week')
      $('#password-strength').css('width', '60%');
      return 'Week'
    } else if (strength == 10) {
      $('#result').removeClass()
      $('#result').addClass('strong');
      $('#password-strength').removeClass('progress-bar-warning');
      $('#password-strength').addClass('progress-bar-success');
      $('#result').addClass('text-success').text('Strength');
      $('#password-strength').css('width', '100%');

      return 'Strong'
    }
  }
  async gotoLogin() {
    this.router.navigate(["/login"])
  }
}
