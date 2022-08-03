import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { PaymentService } from '../../services/payment.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {
  items = this.cartService.getItems();
  counter = this.cartService.itemsLength();
  values: any;
  sum: number;
  subtotal: number;
  delivery: boolean;
  user=JSON.parse(sessionStorage.getItem('user'));

  // eslint-disable-next-line max-len
  constructor(private alertCtrl: AlertController, private cartService: CartService, private wishlistService: WishlistService, private paymentService: PaymentService) { }

  ngOnInit() {

    this.values = this.paymentService.bill();
    this.sum = this.values[0];
    this.subtotal = this.values[1];
    this.delivery= this.values[2];
  }

  async removeAlert(item: any) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Are you sure you wish to remove this item from cart?',
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
               this.removeFromCart(item);
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
      message: 'Are you sure you wish to move this item to wishlist?',
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
                this.removeFromCart(item);
                this.addToWishlist(item);
            }
        }
      ]
    });

    await alert.present();
  }

  removeFromCart(item: any){
    this.cartService.removeFromCart(item);
      window.location.reload();
  }

  addToWishlist(product: any){
    this.wishlistService.addToWishlist(product);
  }
  cartNull()
  {
    if(this.user.cart.length===0)
    {
      return true;
    }
    return false;
  }

  setPrice(){
    sessionStorage.setItem('price', this.subtotal.toString());
  }

}
