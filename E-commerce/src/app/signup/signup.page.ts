/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
  })

  export class SignupPage implements OnInit {

  signupMobileForm: FormGroup;
  users=[];
  userPhone: string;
  exists = false;
  isChecked=false;

  constructor(public nav: NavController, public navigate: NavController) {}

ngOnInit() {
    this.signupMobileForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8), Validators.maxLength(12),
        Validators.required,
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      gender: new FormControl(''),
      fName: new FormControl(''),
      lName: new FormControl(''),
    phone: new FormControl('', Validators.compose([
    Validators.minLength(10),Validators.maxLength(10),
    Validators.required, Validators.pattern('^[0-9]+$')
  ])),
});
this.users = JSON.parse(localStorage.getItem('user')) || [];
document.getElementById('check').innerHTML = '';
}

onSubmit(){
  this.userexists();
  if(!this.userexists()){
    this.users.push(this.signupMobileForm.value);
    localStorage.setItem('user', JSON.stringify(this.users));
    this.signupMobileForm.reset();
  }
}

userexists()
{
  for (let i = 0; i < this.users.length; i++) {
    if (this.users[i].phone === this.signupMobileForm.value.phone) {
        document.getElementById('check').innerHTML = 'User already exists';
        return true;
      }
    }
    document.getElementById('check').innerHTML = '';
    return false;
  }
  shareContact(contact) {
    sessionStorage.setItem('userPhone', contact);
  }

}



