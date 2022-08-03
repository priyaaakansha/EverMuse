/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NotificationsPage } from 'src/app/notifications/notifications.page';
import { notifications } from 'src/app/Files/notifications';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit {
  counter = notifications.length;
  sessionuser=JSON.parse(sessionStorage.getItem('user'));
  localuser=JSON.parse(localStorage.getItem('user'));

  constructor(private popover: PopoverController, public nav: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.userExists();
  }

  login() {
    this.nav.navigateForward('/logincopy');
    this.popover.dismiss();
  }

  helpCenter() {
    this.nav.navigateForward('/help-center');
    this.popover.dismiss();
  }

  orders() {
    this.nav.navigateForward('/main');
    this.popover.dismiss();
  }

  profile() {
    this.nav.navigateForward('/updateprofile');
    this.popover.dismiss();
  }

  addresses() {
    this.nav.navigateForward('/saved-addresses');
    this.popover.dismiss();
  }

  faq()
  {
    this.nav.navigateForward('/faq');
    this.popover.dismiss();
  }

  contact()
  {
    this.nav.navigateForward('/contact');
    this.popover.dismiss();
  }

  tandc()
  {
    this.nav.navigateForward('/tandc');
    this.popover.dismiss();
  }

  return()
  {
    this.nav.navigateForward('/return');
    this.popover.dismiss();
  }

  cancellation()
  {
    this.nav.navigateForward('/cancellation');
    this.popover.dismiss();
  }

  async notifications() {
    const modal = await this.modalCtrl.create({
      component: NotificationsPage
    });
    await modal.present();
    this.popover.dismiss();
  }

  logout()
  {
    this.nav.navigateForward('/home-page');
    for(let i=0;i<this.localuser.length;i++)
    {
      if(this.localuser[i].email===this.sessionuser.email)
      {
        this.localuser[i]=this.sessionuser;
      }
    }
    localStorage.setItem('user', JSON.stringify(this.localuser));
    sessionStorage.clear();

    this.popover.dismiss();
  }

  userExists()
  {
    if(sessionStorage.getItem('user'))
    {
      document.getElementById('usernm').innerHTML=`<b>Hello, ${this.sessionuser.fName}!</b>`;
      document.getElementById('usr').style.display='block';
      document.getElementById('gst').style.display='none';
    }
    else
    {
      document.getElementById('wlcm').innerHTML=`<b>Welcome to XYZ!</b>`;
      document.getElementById('gst').style.display='block';
      document.getElementById('usr').style.display='none';
    }
  }
}
