import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Product, products } from '../files/products';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit {

  categoryName: string;
  label: string;

  public product: {
    id: number;
    catId: number;
    category: string;
    company: string;
    color: string;
    size: string;
    title: string;
    price: number;
    description: string;
    subCat: string;
    image: string;
    stock: number;
  }[] = products;

  constructor(public nav: NavController, private cartService: CartService, private wishlistService: WishlistService) {
    this.label = sessionStorage.getItem('label');
  }

  ngOnInit() {
    this.product = this.getDealsProducts();
  }

  getDealsProducts(){
    if(this.label === '1')
    {
      return this.product.filter((product) => product.subCat === 'Tshirts' && product.price >= 199);

    }
    if(this.label === '2')
    {
      return this.product.filter((product) => product.subCat === 'Dresses' && product.price === 499);

    }
  }

  viewProduct(product) {
    sessionStorage.setItem('product', JSON.stringify(product));

    this.nav.navigateForward('/product-view');
  }
}




