import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss'],
})
export class ElectronicsComponent implements OnInit {

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
