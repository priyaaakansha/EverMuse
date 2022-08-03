/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';
import { Product } from '../files/products';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  users: any;

  constructor() { }

  addToCart(product: Product) {
    this.users = JSON.parse(sessionStorage.getItem('user'));
    this.users['cart'].push(product);
    sessionStorage.setItem('user',JSON.stringify(this.users));
  }

  getItems() {
    this.users = JSON.parse(sessionStorage.getItem('user'));
    if(this.users){
    return this.users['cart'];
    }
      // return this.items;
  }

  itemsLength() {
    this.users = JSON.parse(sessionStorage.getItem('user'));
    if (this.users){
    return this.users['cart'].length;
    }
  }

  removeFromCart(item) {
    this.users = JSON.parse(sessionStorage.getItem('user'));
    const arr=this.users.cart;
    for(let i=0;i<arr.length;i++)
    {
      if(JSON.stringify(this.users.cart[i])===JSON.stringify(item))
      {
        this.users.cart.splice(i,1);
        break;
      }
    }
    sessionStorage.setItem('user',JSON.stringify(this.users));
  }

  clearCart() {
      // this.items = [];
      // return this.items;
  }
}
