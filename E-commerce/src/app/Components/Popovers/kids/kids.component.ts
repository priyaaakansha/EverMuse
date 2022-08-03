import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss'],
})
export class KidsComponent implements OnInit {
  categoryName: string;
  subcatName: string;

  constructor(private popover: PopoverController, private nav: NavController) { }

  ngOnInit() {
  }

   exploreSubcat(catName, subcat) {
    sessionStorage.setItem('categoryName', catName);
    sessionStorage.setItem('subcatName', subcat);

    this.nav.navigateForward('/subproducts');
    this.popover.dismiss();
  }

}
