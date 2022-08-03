import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangeAddressPageRoutingModule } from './exchange-address-routing.module';

import { ExchangeAddressPage } from './exchange-address.page';
import { HeaderComponent } from 'src/app/Components/header/header.component';
import { FooterComponent } from 'src/app/Components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExchangeAddressPageRoutingModule
  ],
  declarations: [ExchangeAddressPage, HeaderComponent, FooterComponent]
})
export class ExchangeAddressPageModule {}
