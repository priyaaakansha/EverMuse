import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-exchange-reason',
  templateUrl: './exchange-reason.page.html',
  styleUrls: ['./exchange-reason.page.scss'],
})

export class ExchangeReasonPage implements OnInit {
  item = JSON.parse(sessionStorage.getItem('exchange'));
  check: boolean;
  check2: boolean;

  constructor(private nav: NavController) { }

  ngOnInit() {
    console.log(this.item);
  }

  viewProduct(product) {
    sessionStorage.setItem('product', JSON.stringify(product));
    this.nav.navigateForward('/product-view');
  }

  radio(value)
  {
    if (value.detail.value) {
      this.check=true;
    }
    else{
      this.check=false;
    }
  }

  checkbox(value)
  {
    if(value.detail.checked)
    {
      this.check2=true;
    }
    else{
      this.check2=false;
    }
  }
  checked()
  {
    if(this.check && this.check2)
    {
      return true;
    }
    return false;
  }

  show()
  {
    if(!(this.check2))
    {
      document.getElementById('alert').innerHTML='Please confirm to proceed.';
    }
    else{
      document.getElementById('alert').innerHTML='';
    }
    if(!(this.check))
    {
    document.getElementById('reason').innerHTML='Please select a reason for exchange.';
    }
    else{
    document.getElementById('reason').innerHTML='';
    }
  }
}

