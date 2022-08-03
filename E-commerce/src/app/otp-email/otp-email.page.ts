/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-otp-email',
  templateUrl: './otp-email.page.html',
  styleUrls: ['./otp-email.page.scss'],
})
export class OtpEmailPage implements OnInit {
  otplist= ['1234', '4321'];
  otpForm: FormGroup;
  userPhone: string;
  check: boolean;
  user: any;
  detail: any;

  constructor(private nav: NavController) {
    this.userPhone = sessionStorage.getItem('userPhone');
    this.detail = sessionStorage.getItem('detail');
  }

  ngOnInit() {
    this.otpForm = new FormGroup({
      otp: new FormControl('')
      });
    localStorage.setItem('otps', JSON.stringify(this.otplist));
  }

  onSubmit()
  {
    this.user=JSON.parse(localStorage.getItem('user'));
        if(!this.checkotp()){
      this.check=true;
      for(let i=0;i<this.user.length;i++)
    {
        if(this.user[i].email===this.detail || this.user[i].phone===this.detail)
        {
          sessionStorage.setItem('user',JSON.stringify(this.user[i]));
          this.nav.navigateForward('/home-page');
          break;
        }
    }
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
    console.log(this.otpForm.value.otp);
    for(let i=0;i<this.otplist.length;i++)
    {
      if(this.otpForm.value.otp===this.otplist[i])
      {
        console.log('true');
        return true;
      }
    }
    console.log('false');
    return false;
  }
}
