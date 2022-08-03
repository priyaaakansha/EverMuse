/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CartService } from '../../services/cart.service';
import { AddAddressPage } from '../../add-address/add-address.page';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})

export class AddressPage implements OnInit {
  items = this.cartService.getItems();
  user=JSON.parse(sessionStorage.getItem('user'));
  addresses=this.user.address;
  home = this.addresses.filter((address) => address.type === 'Home');
  work = this.addresses.filter((address) => address.type === 'Work');
  add = [];

  constructor(private modalCtrl: ModalController, public nav: NavController, private cartService: CartService) { }

  ngOnInit() {
  }

  async openCart() {
    const modal = await this.modalCtrl.create({
      component: AddAddressPage
    });
    await modal.present();
  }

  showAddress(address) {
    this.add=address;
  }

  checked() {
    if(this.add.length===0)
     {
      return true;
    }
    else {
      return false;
    }
  }

  onSubmit() {
    if(this.checked())
    {
      document.getElementById('check').innerHTML='Please select an address to continue.';
    }
    else{
      sessionStorage.setItem('selAdd', JSON.stringify(this.add));
    }
  }
}
