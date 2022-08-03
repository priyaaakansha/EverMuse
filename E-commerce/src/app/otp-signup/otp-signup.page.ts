/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-otp-signup',
  templateUrl: './otp-signup.page.html',
  styleUrls: ['./otp-signup.page.scss'],
})

export class OtpSignupPage implements OnInit {
  otplist= [1234, 4321];
  otpForm: FormGroup;
  userPhone: string;
  check: boolean;

  constructor() {
    this.userPhone = sessionStorage.getItem('userPhone');
  }

  ngOnInit() {
    this.otpForm = new FormGroup({
      otp: new FormControl('')
      });
    localStorage.setItem('otps', JSON.stringify(this.otplist));
  }

  onSubmit()
  {
    if(!this.checkotp()){
      this.check=true;
    }
    else
    {
      this.check=false;
    }
    this.otpForm.reset();
  }

  reset()
  {
    this.otpForm.reset();
  }
  checkotp() {
    for(let i=0;i<this.otplist.length;i++)
    {
      if(this.otpForm.value.otp===JSON.stringify(this.otplist[i]))
      {
        console.log('true');
        return true;
      }
    }
    console.log('false');
    return false;
  }
}
