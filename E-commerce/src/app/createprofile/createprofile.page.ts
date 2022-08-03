/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.page.html',
  styleUrls: ['./createprofile.page.scss'],
})

export class CreateprofilePage implements OnInit {
  accountForm: FormGroup;
  exists = false;
  users = [];
  subscription = JSON.parse(localStorage.getItem('subsribersList')) || [];

  userPhone: string;

    constructor(private nav: NavController) {
      this.userPhone = sessionStorage.getItem('userPhone');
    }

  ngOnInit() {
    this.accountForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8), Validators.maxLength(12),
        Validators.required,
      ])),
      gender: new FormControl(''),
      fName: new FormControl(''),
      lName: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl([]),
      cart: new FormControl([]),
      wishlist: new FormControl([]),
      orders : new FormControl([])
  });
    this.users = JSON.parse(localStorage.getItem('user')) || [];
    this.userexists();
  }

  onSubmit() {
    const x=document.getElementById('checkbox').getAttribute('aria-checked');
    if(x)
    {
      this.subscription.push(this.accountForm.value.email);
      localStorage.setItem('subscribersList',this.subscription);
    }
    if (this.accountForm.value.gender === 'ion-rb-0') {
      this.accountForm.value.gender = 'Male';
    }
    else {
      this.accountForm.value.gender = 'Female';
    }

    if (!this.userexists()) {
      this.users.splice(this.users.length-1,1);
      this.accountForm.value.phone=this.userPhone;
      this.users.push(this.accountForm.value);
      localStorage.setItem('user', JSON.stringify(this.users));
      this.accountForm.reset();
      this.nav.navigateForward('/logincopy');
    }
    else
    {
      document.getElementById('check').innerHTML = 'User already exists';
      console.log('whyyyyy');
    }
  }
  userexists()
  {
    for (let i = 0; i < this.users.length; i++)
    {
      if (this.users[i].email === this.accountForm.value.email) {
        return true;
      }
    }

    document.getElementById('check').innerHTML = '';
    return false;
    }
}


