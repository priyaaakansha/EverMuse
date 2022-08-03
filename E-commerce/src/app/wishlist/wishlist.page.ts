import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { CartService } from '../services/cart.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  counter = this.wishlistService.itemsLength();
  items = this.wishlistService.getItems();

  constructor(private alertCtrl: AlertController, private wishlistService: WishlistService, private cartService: CartService) { }

  ngOnInit() {
  }

  async removeAlert(item: any) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Are you sure you wish to remove this item from wishlist?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'icon-color',
        },
        {
          text: 'Delete',
          role:'Ok',
          cssClass:'icon-color',
            handler: () =>{
               this.removeFromWishlist(item);
            }
        }
      ]
    });
    await alert.present();
  }

  async moveAlert(item: any) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Are you sure you wish to move this item to cart?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'icon-color',
        },
        {
          text: 'Yes',
          role:'Ok',
          cssClass:'icon-color',
            handler: () =>{
                this.removeFromWishlist(item);
                this.addToCart(item);
            }
        }
      ]
    });

    await alert.present();
  }

  removeFromWishlist(item: any){
    this.wishlistService.removeFromWishlist(item);
    location.reload();
  }

  addToCart(item: any){
    this.cartService.addToCart(item);
  }
}
