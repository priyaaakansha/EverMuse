/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';
import { Product } from '../files/products';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  // items: Product[] = [];
  users: any;
  constructor() { }

  addToWishlist(product: Product) {
    // this.items.push(product);
    // console.log(this.items);
    this.users = JSON.parse(sessionStorage.getItem('user'));
    this.users['wishlist'].push(product);
    sessionStorage.setItem('user',JSON.stringify(this.users));
  }

  getItems() {
    this.users = JSON.parse(sessionStorage.getItem('user'));
    return this.users['wishlist'];
      // return this.items;
  }

  itemsLength() {
    this.users = JSON.parse(sessionStorage.getItem('user'));
    if(this.users)
    {
      return this.users['wishlist'].length;
    }
}

removeFromWishlist(item) {
  this.users = JSON.parse(sessionStorage.getItem('user'));
  const arr=this.users.wishlist;
  for(let i=0;i<arr.length;i++)
  {
    if(JSON.stringify(this.users.wishlist[i])===JSON.stringify(item))
    {
      this.users.wishlist.splice(i,1);
      break;
    }
  }
  sessionStorage.setItem('user',JSON.stringify(this.users));
}

  clearWishlist() {
      // this.items = [];
      // return this.items;
  }
}
