import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressPageRoutingModule } from './address-routing.module';

import { AddressPage } from './address.page';
import { FooterComponent } from 'src/app/Components/footer/footer.component';
import { HeaderComponent } from 'src/app/Components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressPageRoutingModule
  ],
  declarations: [AddressPage, FooterComponent, HeaderComponent]
})
export class AddressPageModule {}
