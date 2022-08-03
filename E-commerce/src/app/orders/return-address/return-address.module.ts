import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnAddressPageRoutingModule } from './return-address-routing.module';

import { ReturnAddressPage } from './return-address.page';
import { HeaderComponent } from 'src/app/Components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnAddressPageRoutingModule
  ],
  declarations: [ReturnAddressPage, HeaderComponent]
})
export class ReturnAddressPageModule {}
