import { Component, OnInit } from '@angular/core';
import { Card, cards } from '../../Files/cards';
import { PaymentService } from '../../services/payment.service';
import { OrdersService } from '../../services/orders.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})

export class PaymentPage implements OnInit {
  cards: Card[] = cards;
  values = this.paymentService.bill();
  sum = this.values[0];
  subtotal = this.values[1];
  delivery = this.values[2];
  check=false;


  tutorialHidden = true;
  mode: string;
  // paymentHandler: any = null;

  constructor(private paymentService: PaymentService, private ordersService: OrdersService, public nav: NavController) { }

  ngOnInit() {}

  checked()
  {
    if(this.check===true)
    {
      return true;
    }
    return false;
  }

  // makePayment(amount) {
  //   const paymentHandler = (<any>window).StripeCheckout.configure({
  //     key: 'pk_test_51JDqYuSGEYHfdDSm8PYkPnfDqrW08uBJOAKVwyBBTPIAYIuLTuFFQA30jwFk00Dr1IFttEvYh9YIJN38lO2D50f300JMdz6F2y',
  //     locale: 'auto',
  //     token(stripeToken: any) {
  //       console.log(stripeToken);
  //       alert('Stripe token generated!');
  //       console.log('in token');
  //     }
  //   });

  //   paymentHandler.open({
  //     name: 'XYZ',
  //     description: 'EverMuse',
  //     amount: amount * 100
  //   });
  // }

  // invokeStripe() {
  //   if(!window.document.getElementById('stripe-script')) {
  //     const script = window.document.createElement('script');
  //     script.id = 'stripe-script';
  //     script.type = 'text/javascript';
  //     script.src = 'https://checkout.stripe.com/checkout.js';

  //     script.onload = () => {
  //       this.paymentHandler = (<any>window).StripeCheckout.configure({
  //         key: 'pk_test_51JLTkGSDWpVvPiXQP4U4b6O5At4lYzf5O3NJGHlpBMMyNKakiVLiRQdTjjcPxlsQf0tZE22izrgkoafdeu8GFCHP00ICh69Ax9',
  //         locale: 'auto',
  //         token(stripeToken: any) {
  //           console.log(stripeToken);
  //           alert('Payment has been made successfully!');
  //         }
  //       });
  //     };
  //     window.document.body.appendChild(script);
  //   }
  // }

  showButton(){
    if(this.tutorialHidden === true){
      this.tutorialHidden = false;
      document.getElementById('card').hidden = false;
    }
  }
  method()
  {
    // if(i===1)
    // {
    //   this.mode='Card';
    //   this.check=false;
    // }
    // else{
      this.mode='Cash on Delivery';
      this.check=true;
    // }
    console.log(this.mode);
  }
  hideButton(){
    if(this.tutorialHidden === false){

      this.tutorialHidden = true;
      document.getElementById('card').hidden = true;
    }
  }

  onSubmit(){
    if(!this.checked()) {
      document.getElementById('check').innerHTML='Please select a mode of payment.';
    }
    else{
      document.getElementById('check').innerHTML='';
      sessionStorage.setItem('mode', this.mode);
      this.ordersService.setOrder();
    }
  }
}

