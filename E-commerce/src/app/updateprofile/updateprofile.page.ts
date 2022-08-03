import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdatePasswordPage } from '../update-password/update-password.page';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.page.html',
  styleUrls: ['./updateprofile.page.scss'],
})
export class UpdateprofilePage implements OnInit {
  info: FormGroup;
  user=JSON.parse(sessionStorage.getItem('user'));

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.info = new FormGroup({
      email: new FormControl('', Validators.minLength(3)),
      gender: new FormControl(''),
      fName: new FormControl('', Validators.minLength(1)),
      lName: new FormControl('', Validators.minLength(1)),
      phone: new FormControl('', Validators.compose([
        Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$')
      ])),
    });
  }

  async success() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: 'Your changes have been saved successfully!',
    });
    await alert.present();
  }

  async updatePwd() {
    const modal = await this.modalCtrl.create({
      component: UpdatePasswordPage
    });
    await modal.present();
  }

  onSubmit()
  {
    sessionStorage.setItem('user',JSON.stringify(this.user));
  }
  edit1()
  {
    document.getElementById('fName').setAttribute('readonly','false');
    document.getElementById('fName').setAttribute('value','');
  }
  edit2()
  {
    document.getElementById('lName').setAttribute('readonly','false');
    document.getElementById('lName').setAttribute('value','');
  }

}
