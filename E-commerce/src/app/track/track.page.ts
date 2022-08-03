import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
})
export class TrackPage implements OnInit {
  item = JSON.parse(sessionStorage.getItem('track'));
  id = sessionStorage.getItem('trackID');

  user = JSON.parse(sessionStorage.getItem('user'));
  orders = this.user.orders;
  order: any;

  constructor(private nav: NavController) { }

  ngOnInit() {
    this.order = this.getOrder();
    console.log(this.order);
    console.log(this.order[0].confirmed);

  }

  getOrder() {
    return this.orders.filter((order) => JSON.stringify(order.id) === this.id);
   }

  viewProduct(product) {
    sessionStorage.setItem('product', JSON.stringify(product));
    this.nav.navigateForward('/product-view');
  }

}
