import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-exchange-address',
  templateUrl: './exchange-address.page.html',
  styleUrls: ['./exchange-address.page.scss'],
})

export class ExchangeAddressPage implements OnInit {
  exchangeID = sessionStorage.getItem('exchangeID');
  user = JSON.parse(sessionStorage.getItem('user'));
  // index = this.user.orders.length-1;
  orders = this.user.orders;
  order: any;
  address: any;
  // items = this.order.products;
  item = JSON.parse(sessionStorage.getItem('exchange'));

  constructor(private alertCtrl: AlertController, private nav: NavController) { }


  ngOnInit() {
    this.order = this.getOrder();
    this.address = this.order[0].address;
  }

  getOrder() {
   return this.orders.filter((order) => JSON.stringify(order.id) === this.exchangeID);
  }

  async success() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: 'Exchange Request Placed Successfully!',
    });
    await alert.present();
    this.nav.navigateForward('/main');
  }

}
