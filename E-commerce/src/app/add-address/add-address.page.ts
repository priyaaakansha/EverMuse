/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})

export class AddAddressPage implements OnInit {
  address: FormGroup;
  users: any;

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.address = new FormGroup({
        fName: new FormControl('', [Validators.required]),
        lName: new FormControl('', [Validators.required]),
        phone: new FormControl('', Validators.compose([
          Validators.minLength(10),Validators.maxLength(10),
          Validators.required, Validators.pattern('^[0-9]+$')])),
        line1: new FormControl('', [Validators.required]),
        line2: new FormControl('', [Validators.required]),
        line3: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        pincode: new FormControl('', Validators.compose([Validators.minLength(6), Validators.maxLength(6),
          Validators.required, Validators.pattern('^[0-9]+$')])),
        type: new FormControl('',Validators.required),
    });
  }

  async close() {
    this.modalCtrl.dismiss();
  }

  async save() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: 'Address has been added',
    });
    await alert.present();
    this.modalCtrl.dismiss();
  }

  onSubmit()
  {
    console.log(document.getElementById('work'));
    this.users = JSON.parse(sessionStorage.getItem('user'));
    this.users['address'].push(this.address.value);
    sessionStorage.setItem('user',JSON.stringify(this.users));
    location.reload();
  }

  radio(value)
  {
    console.log(value.detail.value);
    if (value.detail.value === 'Home') {
      this.address.value.type = 'Home';
    }
    else {
      this.address.value.type = 'Work';
    }
  }
}
