import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { AddAddressPage } from '../add-address/add-address.page';


@Component({
  selector: 'app-saved-addresses',
  templateUrl: './saved-addresses.page.html',
  styleUrls: ['./saved-addresses.page.scss'],
})
export class SavedAddressesPage implements OnInit {

  items = this.cartService.getItems();
  user=JSON.parse(sessionStorage.getItem('user')) || [];
  addresses=this.user.address;
  home = this.addresses.filter((address) => address.type === 'Home');
  work = this.addresses.filter((address) => address.type === 'Work');

  constructor(private modalCtrl: ModalController, public nav: NavController, private cartService: CartService) { }

  ngOnInit() {
  }

  async openCart() {
    const modal = await this.modalCtrl.create({
      component: AddAddressPage
    });
    await modal.present();
  }
}
