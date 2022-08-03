import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-return-address',
  templateUrl: './return-address.page.html',
  styleUrls: ['./return-address.page.scss'],
})

export class ReturnAddressPage implements OnInit {
  returnID = sessionStorage.getItem('returnID');
  user = JSON.parse(sessionStorage.getItem('user'));
  orders = this.user.orders;
  order: any;
  address: any;
  item = JSON.parse(sessionStorage.getItem('return'));

  constructor(private alertCtrl: AlertController, private nav: NavController) { }

  ngOnInit() {
    this.order = this.getOrder();
    this.address = this.order[0].address;
  }

  async success() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: 'Return Request Placed Successfully!',
    });
    await alert.present();
    this.nav.navigateForward('/main');
  }

  getOrder() {
    return this.orders.filter((order) => JSON.stringify(order.id) === this.returnID);
  }
}
