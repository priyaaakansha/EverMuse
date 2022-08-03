import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Product, products } from '../files/products';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-subproducts',
  templateUrl: './subproducts.page.html',
  styleUrls: ['./subproducts.page.scss'],
})
export class SubproductsPage implements OnInit {
  addedToWishlist = false;

  categoryName: string;
  subcatName: string;

  product: Product[] = products;

  constructor(public nav: NavController, private cartService: CartService, private wishlistService: WishlistService) {
    this.categoryName = sessionStorage.getItem('categoryName');
    this.subcatName = sessionStorage.getItem('subcatName');
  }

  ngOnInit() {
    this.product = this.getSubcat();
  }

  getSubcat(){
    return this.product.filter((product) => product.category === this.categoryName && product.subCat === this.subcatName);
  }

  // toggleThumb(product: any) {
  //   if (this.addedToWishlist) {
  //     this.addedToWishlist = false;
  //   } else {
  //     this.addedToWishlist = true;
  //   }
  // }

  // addToWishlist(product: any){
  //   this.wishlistService.addToWishlist(product);
  //   window.alert('Your product has been added to the wishlist!');
  // }

  viewProduct(product) {
    sessionStorage.setItem('product', JSON.stringify(product));

    this.nav.navigateForward('/product-view');
  }
}

