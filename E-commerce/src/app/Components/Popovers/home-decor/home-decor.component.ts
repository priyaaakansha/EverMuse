import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-decor',
  templateUrl: './home-decor.component.html',
  styleUrls: ['./home-decor.component.scss'],
})
export class HomeDecorComponent implements OnInit {

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
