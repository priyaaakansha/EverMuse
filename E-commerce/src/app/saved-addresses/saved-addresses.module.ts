import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedAddressesPageRoutingModule } from './saved-addresses-routing.module';

import { SavedAddressesPage } from './saved-addresses.page';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedAddressesPageRoutingModule
  ],
  declarations: [SavedAddressesPage, HeaderComponent, FooterComponent]
})
export class SavedAddressesPageModule {}
