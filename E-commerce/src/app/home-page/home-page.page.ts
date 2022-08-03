import { Component, OnInit} from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { MenComponent } from '../Components/Popovers/men/men.component';
import { WomenComponent } from '../Components/Popovers/women/women.component';
import { KidsComponent } from '../Components/Popovers/kids/kids.component';
import { HomeDecorComponent } from '../Components/Popovers/home-decor/home-decor.component';
import { ElectronicsComponent } from '../Components/Popovers/electronics/electronics.component';
import { GiftComponent } from '../Components/Popovers/gift/gift.component';
import { CareComponent } from '../Components/Popovers/care/care.component';
import { Brand, brands, Category, categories } from '../files/display';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})

export class HomePagePage implements OnInit {
  brands: Brand[] = brands;
  categories: Category[] = categories;

  categoryName: string;

  constructor(private popover: PopoverController, public nav: NavController) {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('foo');
    }
    console.log('in construct');
  }

  ngOnInit(){}
    callCatPop(eve, categoryName){
      if(categoryName === 'Men')
      {
        this.createMenPopover(eve);
      }
      else if(categoryName === 'Women')
      {
        this.createWomenPopover(eve);
      }
      else if(categoryName === 'Kids')
      {
        this.createKidsPopover(eve);
      }
      else if(categoryName === 'Home Decor')
      {
        this.createDecorPopover(eve);
      }
      else if(categoryName === 'Electronics')
      {
        this.createElectronicsPopover(eve);
      }
      else if(categoryName === 'Personal Care')
      {
        this.createCarePopover(eve);
      }
      else if(categoryName === 'Gifts')
      {
        this.createGiftsPopover(eve);
      }
  }

  async createMenPopover(eve: any)
    {
        const popover = await this.popover.create({component:MenComponent,event:eve,mode:'ios',cssClass:'popOver'});
        return await popover.present();
    }

  async createWomenPopover(eve: any)
      {
          const popover = await this.popover.create({component:WomenComponent,event:eve,mode:'ios',cssClass:'popOver'});
          return await popover.present();
      }

    async createKidsPopover(eve: any)
      {
      const popover = await this.popover.create({component:KidsComponent,event:eve,mode:'ios',cssClass:'popOver'});
      return await popover.present();
      }

    async createDecorPopover(eve)
    {
      const popover = await this.popover.create({component:HomeDecorComponent, event:eve,mode:'ios',cssClass:'popOver'});
      return await popover.present();
    }

    async createElectronicsPopover(eve)
    {
      const popover = await this.popover.create({component:ElectronicsComponent, event:eve,mode:'ios',cssClass:'popOver'});
      return await popover.present();
    }

    async createCarePopover(eve)
    {
      const popover = await this.popover.create({component:CareComponent, event:eve,mode:'ios',cssClass:'popOver'});
      return await popover.present();
    }

    async createGiftsPopover(eve)
    {
      const popover = await this.popover.create({component:GiftComponent, event:eve,mode:'ios',cssClass:'popOver'});
      return await popover.present();
    }

    exploreCat(name) {
      sessionStorage.setItem('categoryName', name);
      this.nav.navigateForward('/products');
    }

    exploreDeals(label) {
      sessionStorage.setItem('label', label);
      this.nav.navigateForward('/deals');
    }

    closePopover()
    {
      this.popover.dismiss();
    }
}
