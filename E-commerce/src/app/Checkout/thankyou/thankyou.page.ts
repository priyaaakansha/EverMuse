import { Component, OnInit } from '@angular/core';
import { OrderSummaryPage } from '../order-summary/order-summary.page';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.page.html',
  styleUrls: ['./thankyou.page.scss'],
})
export class ThankyouPage implements OnInit {
  user = JSON.parse(sessionStorage.getItem('user'));
  index = this.user.orders.length-1;
  order = this.user.orders[this.index];
  address = this.order.address;
  items = this.order.products;

  constructor(private modalCtrl: ModalController, public nav: NavController) { }

  ngOnInit() {
  }

  async orderSummary() {
    const modal = await this.modalCtrl.create({
      component: OrderSummaryPage
    });
    await modal.present();
  }

}
