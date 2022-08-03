/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  orders=[];
  users = JSON.parse(sessionStorage.getItem('user'));
  constructor(private alertCtrl: AlertController, private nav: NavController) { }

  ngOnInit() {
    for(let i=this.users.orders.length-1;i>=0;i--)
    {
      this.orders.push(this.users.orders[i]);
    }
  }

  async cancelAlert(order: any) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'If you cancel this item, all the items in that order will be cancelled. Are you sure you wish to cancel?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass:'icon-color',
        },
        {
          text: 'Yes',
          role:'Ok',
          cssClass:'icon-color',
            handler: () =>{
                this.cancel(order);
            }
        }
      ]
    });

    await alert.present();
  }

  cancel(order: any)
  {
    console.log(order);
    order.cancel=true;
    for(let i=0;i<this.users.orders.length;i++)
    {
      if(this.users.orders[i].id===order.id)
      {
        this.users.orders[i]=order;
      }
    }
    sessionStorage.setItem('user',JSON.stringify(this.users));
  }

  exchange(product, id)
  {
    sessionStorage.setItem('exchange', JSON.stringify(product));
    sessionStorage.setItem('exchangeID', JSON.stringify(id));

    this.nav.navigateForward('/exchange-reason');
  }

  return(product, id)
  {
    sessionStorage.setItem('return', JSON.stringify(product));
    sessionStorage.setItem('returnID', JSON.stringify(id));

    this.nav.navigateForward('/return-reason');
  }

  track(product, id)
  {
    sessionStorage.setItem('track', JSON.stringify(product));
    sessionStorage.setItem('trackID', JSON.stringify(id));

    this.nav.navigateForward('/track');
  }

}
