import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../Popovers/profile/profile.component';

import { PopoverController } from '@ionic/angular';
import { CartService } from '../../services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  user = JSON.parse(sessionStorage.getItem('user')) || [];
  counter: number;
  ctr: number;
  private tutorialHidden = true;

  constructor(private popover: PopoverController, private cartService: CartService, private wishlistService: WishlistService) { }

  ngOnInit() {
  }

  wishlistCtr()
  {
    this.ctr = this.wishlistService.itemsLength();
    return this.ctr;
  }

  retcounter()
  {
    this.counter = this.cartService.itemsLength();
    return this.counter;
  }

    async createProfilePopover(eve)
    {
      const popover = await this.popover.create({component:ProfileComponent, event:eve,mode:'ios',cssClass:'profile'});
      return await popover.present();
    }

    showCat(){
      if(this.tutorialHidden === true){
        this.tutorialHidden = false;
        document.getElementById('grid').hidden = false;
      }
      else if(this.tutorialHidden === false){
        this.tutorialHidden = true;
        document.getElementById('grid').hidden = true;
      }
    }

}

