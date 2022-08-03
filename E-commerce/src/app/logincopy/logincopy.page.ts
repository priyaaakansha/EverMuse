/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-logincopy',
    templateUrl: './logincopy.page.html',
    styleUrls: ['./logincopy.page.scss'],
  })

  export class LogincopyPage implements OnInit {
  loginEmailForm: FormGroup;
  valid: boolean;
  validpass: boolean;
  exists: boolean;
  success: boolean;
  isEmail: boolean;
  isPhone: boolean;
  correctPass=false;
  submitted=false;
  user: any;

  constructor(){}

  ngOnInit() {
    this.loginEmailForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8), Validators.maxLength(12),
        Validators.required,
      ])),
      gender: new FormControl(''),
      fName: new FormControl(''),
      lName: new FormControl(''),
      phone: new FormControl('')
    });

  }

  letsgo()
  {
    if(this.success)
    {
      return true;
    }
    return false;
  }

  otp()
  {
    this.user = JSON.parse(localStorage.getItem('user'));
    for(let i=0;i<this.user.length;i++)
    {
        if(this.user[i].email===this.loginEmailForm.value.email || this.user[i].phone===this.loginEmailForm.value.email)
        {
          this.exists=true;
          break;
        }
        else
        {
          this.exists=false;
        }
    }
    console.log(this.exists);
    if(!this.exists || this.loginEmailForm.value.email.length===0)
    {
      document.getElementById('otp').innerText='Please enter valid Email/Phone to request OTP';
    }
    else
    {
      document.getElementById('otp').innerText='';
    }
  }

  share()
  {
    sessionStorage.setItem('detail', this.loginEmailForm.value.email);
  }
  onSubmit()
  {
    this.user= JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    this.submitted=true;
    if(this.loginEmailForm.get('password').valid)
    {
      this.validpass=true;
    }
    else
    {
      this.validpass=false;
    }
    document.getElementById('validation2').innerText='';
    document.getElementById('checkPass').innerText='';
    this.checkval();
    if(this.valid)
    {
      this.checkexists();
      if(this.exists)
      {
        if(this.correctPass)
        {
          this.success=true;
        }
        else
        {
          document.getElementById('checkPass').innerText='Incorrect Password';
          return;
        }
      }
      else{
        document.getElementById('validation2').innerText='User does not exist';
        return;
      }
    }
  }
  checkval()
  {
    if(this.loginEmailForm.value.email.includes('@'))
    {
      this.isEmail=true;
      if (this.loginEmailForm.value.email.indexOf('@') <= 0 || this.loginEmailForm.value.email.indexOf('@') === this.loginEmailForm.value.email.length - 1)
      {
        this.valid=false;
      }
      else
      {
        this.valid=true;
      }
    }
    else
    {
      const phoneno = /^\d{10}$/;
      if(this.loginEmailForm.value.email.match(phoneno))
      {
        this.isPhone=true;
        this.valid=true;
      }
      else
      {
        this.valid=false;
      }
    }
  }
  checkexists()
  {
    for(let i=0;i<this.user.length;i++)
    {
      if(this.isEmail)
      {
        if(this.user[i].email===this.loginEmailForm.value.email)
        {
          this.exists=true;
          if(this.user[i].password===this.loginEmailForm.value.password)
          {
            sessionStorage.setItem('user', JSON.stringify(this.user[i]));
            this.correctPass=true;
            break;
          }
        }
        else
        {
          this.exists=false;
        }
      }
      else if(this.isPhone)
      {
        if(this.user[i].phone===this.loginEmailForm.value.email)
        {
          this.exists=true;
          this.loginEmailForm.value.phone=this.loginEmailForm.value.email;
          if(this.user[i].password===this.loginEmailForm.value.password)
          {
            sessionStorage.setItem('user', JSON.stringify(this.user[i]));
            this.correctPass=true;
            break;
          }
        }
        else
        {
          this.exists=false;
        }
      }
    }
  }
}
















