import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
})
export class OrderSummaryPage implements OnInit {
  user = JSON.parse(sessionStorage.getItem('user'));
  index = this.user.orders.length-1;
  order = this.user.orders[this.index];
  address = this.order.address;
  items = this.order.products;

  constructor(private modalCtrl: ModalController, private nav: NavController) { }

  ngOnInit() {
    console.log(this.order);
    console.log(this.address);
  }

  async close() {
    this.modalCtrl.dismiss();
  }

  viewProduct(product) {
    this.modalCtrl.dismiss();
    sessionStorage.setItem('product', JSON.stringify(product));

    this.nav.navigateForward('/product-view');
  }

}
