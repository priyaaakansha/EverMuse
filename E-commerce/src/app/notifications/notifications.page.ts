import { Component, OnInit } from '@angular/core';
import { Notification, notifications } from '../Files/notifications';
import { ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})

export class NotificationsPage implements OnInit {
  click = false;
  notifications: Notification[] = notifications;

  constructor(public toastCtrl: ToastController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async close() {
    this.modalCtrl.dismiss();
  }

  clear()
  {
    this.click = true;
  }

  change() {
    return this.click;
  }

}
