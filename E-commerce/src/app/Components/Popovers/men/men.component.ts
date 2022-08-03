import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { Brand, brands } from 'src/app/files/display';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss'],
})
export class MenComponent implements OnInit {
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
