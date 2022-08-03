/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-verify-email',
    templateUrl: './verify-email.page.html',
    styleUrls: ['./verify-email.page.scss'],
  })
  export class VerifyEmailPage implements OnInit {

    otplist= [1234,4321];
    otpForm: FormGroup;
    userPhone: string;
    constructor() {
      this.userPhone = sessionStorage.getItem('userPhone');
    }

    ngOnInit() {
      this.otpForm = new FormGroup({
        otp: new FormControl('')
        });
      localStorage.setItem('otps',JSON.stringify(this.otplist));
    }

    onSubmit()
    {
      if(!this.checkotp()){
        console.log('hellohello');
      document.getElementById('check').innerHTML='Invalid OTP';
      }
      else
      {
        document.getElementById('check').innerHTML='not Invalid OTP';
      }
    }
    checkotp() {
      for(let i=0;i<this.otplist.length;i++)
      {
        if(JSON.stringify(this.otpForm.value.otp)===JSON.stringify(this.otplist[i]))
        {
          console.log('true');
          return true;
        }
      }
      console.log('false');
      return false;
    }

}
