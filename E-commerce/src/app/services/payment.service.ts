import { Injectable } from '@angular/core';
import { CartService } from '../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  items = this.cartService.getItems();
  counter = this.cartService.itemsLength();
  sum = 0;
  subtotal: number;
  delivery: boolean;

  constructor(private cartService: CartService) { }

  bill(){
    this.sum=0;
    console.log('Hello');
    for(let i=0;i<this.counter;i++)
    {
      this.sum = this.items[i].price+this.sum;
    }

    if(this.sum <= 1499)
    {
      this.delivery=true;
      this.subtotal = this.sum + 150;
    }
    else{
      this.delivery=false;
      this.subtotal = this.sum;
    }

    console.log(this.sum, this.delivery, this.subtotal);
    return [this.sum, this.subtotal, this.delivery];
  }


}
