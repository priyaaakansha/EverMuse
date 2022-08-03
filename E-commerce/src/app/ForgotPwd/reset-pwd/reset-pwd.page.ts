/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.page.html',
  styleUrls: ['./reset-pwd.page.scss'],
})
export class ResetPwdPage implements OnInit {

  resetPwdForm: FormGroup;

  email: string;
  user=JSON.parse(localStorage.getItem('user'));

  constructor() {}

  ngOnInit() {

  this.resetPwdForm = new FormGroup({
   email: new FormControl('',[Validators.required, Validators.email]),
  });
}

  onSubmit()
  {
    if(this.userexists())
    {
      console.log(this.resetPwdForm.value);
      this.resetPwdForm.reset();
    }
    else
    {
      console.log('not exist');
      document.getElementById('check').innerHTML='User does not exist';
    }
  }
  userexists()
  {
    document.getElementById('check').innerHTML='';
    for(let i=0;i<this.user.length;i++)
    {
      if(this.resetPwdForm.value.email===this.user[i].email)
      {
        return true;
      }
    }
    return false;
  }
}
