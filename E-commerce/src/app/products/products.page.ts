import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Product, products } from '../files/products';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})

export class ProductsPage implements OnInit {
  categoryName: string;
  products: Product[] = products;

  constructor(public nav: NavController, private cartService: CartService, private wishlistService: WishlistService) {
    this.categoryName = sessionStorage.getItem('categoryName');
  }

  ngOnInit() {
    this.products = this.getCatProducts();
  }

  getCatProducts(){
    return this.products.filter((product) => product.category === this.categoryName);
  }

  // addToWishlist(product: any){
  //   this.wishlistService.addToWishlist(product);
  // }

  viewProduct(product) {
    sessionStorage.setItem('product', JSON.stringify(product));

    this.nav.navigateForward('/product-view');
  }
}
