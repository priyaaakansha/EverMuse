import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss'],
})
export class GiftComponent implements OnInit {

  categoryName: string;
  subcatName: string;
  constructor(private popover: PopoverController, public nav: NavController) { }

  ngOnInit() {
  }

  exploreSubcat(catName, subcat) {
    sessionStorage.setItem('categoryName', catName);
    sessionStorage.setItem('subcatName', subcat);

    this.nav.navigateForward('/subproducts');
    this.popover.dismiss();
  }
}
