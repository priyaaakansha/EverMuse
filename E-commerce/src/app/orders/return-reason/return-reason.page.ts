import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-return-reason',
  templateUrl: './return-reason.page.html',
  styleUrls: ['./return-reason.page.scss'],
})
export class ReturnReasonPage implements OnInit {

  item = JSON.parse(sessionStorage.getItem('return'));
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
    document.getElementById('reason').innerHTML='Please select a reason for return.';
    }
    else{
    document.getElementById('reason').innerHTML='';
    }
  }

}
