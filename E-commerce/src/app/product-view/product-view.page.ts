/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.page.html',
  styleUrls: ['./product-view.page.scss'],
})
export class ProductViewPage implements OnInit {

  product: any;
  size: any;
  user: any;
  apparel=['Tshirts','Shirts','Trousers','Jeans','Blazers','Kurta','Sherwani','Dresses','Kurta Sets','Lehenga Cholis','Sarees','Sweaters','Sweatshirts','Skirts','Jackets'];
  footwear=['Flip Flops','Sandals','Casual Shoes','Sports Shoes','Heels','Shoes'];

  constructor(public nav: NavController, private alertCtrl: AlertController, private cartService: CartService, private wishlistService: WishlistService) {
    this.product=JSON.parse(sessionStorage.getItem('product'));
    this.nav.navigateForward('/product-view');
  }

  ngOnInit() {
  }
  onChange(size)
  {
    console.log(size);
    this.size=size;
  }

  addToCart(product: any){
    this.user=JSON.parse(sessionStorage.getItem('user'));
    if(!this.user)
    {
      this.nav.navigateForward('/logincopy');
    }
    else
    {
      if(product.size)
      {
        this.cartService.addToCart(product);
        this.successCart();
        document.getElementById('check').innerHTML='';
      }
      else{
        document.getElementById('check').innerHTML='Please select a size';
      }
    }
  }
  check1(product: any)
  {
    if(this.apparel.includes(product.subCat))
    {
      product.size=this.size;
      return true;
    }
    return false;
  }
  check2(product: any)
  {
    if(this.footwear.includes(product.subCat))
    {
      product.size=this.size;
      return true;
    }
    return false;
  }

  async successWishlist() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: 'The product has been successfully added to wishlist!',
    });
    await alert.present();
  }

  async successCart() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: 'The product has been successfully added to cart!',
    });
    await alert.present();
  }

  addToWishlist(product: any){
    this.user=JSON.parse(sessionStorage.getItem('user'));
    if(!this.user)
    {
      this.nav.navigateForward('/logincopy');
    }
    else
    {
      this.wishlistService.addToWishlist(product);
      this.successWishlist();
    }
  }
}
