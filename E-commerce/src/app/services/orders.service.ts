/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';

class Order {
  id: string;
  modeOfPayment: string;
  address: string;
  price: string;
  confirmed: boolean;
  packed: boolean;
  shipped: boolean;
  delivered: boolean;
  cancel: boolean;

  products: [];
}

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  order: Order = new Order();
  users: any;
  items: any;

  constructor() { }

  generateId() {
    return 'ORD' + Math.random().toString(36).substr(2, 5);
  }

  setOrder(){
    this.users = JSON.parse(sessionStorage.getItem('user'));

    this.order.id = this.generateId();
    this.order.price = sessionStorage.getItem('price');
    this.order.modeOfPayment = sessionStorage.getItem('mode');
    this.order.address = JSON.parse(sessionStorage.getItem('selAdd'));
    this.order.products = this.users['cart'];
    this.users['cart'] = [];
    this.order.confirmed = true;
    this.order.packed = true;
    this.order.shipped = true;
    this.order.delivered = false;
    this.order.cancel = false;

    this.users['orders'].push(this.order);
    sessionStorage.setItem('user',JSON.stringify(this.users));
  }
}
