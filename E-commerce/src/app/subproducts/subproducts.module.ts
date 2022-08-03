import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubproductsPageRoutingModule } from './subproducts-routing.module';

import { SubproductsPage } from './subproducts.page';
import { HeaderComponent } from '../Components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubproductsPageRoutingModule
  ],
  declarations: [SubproductsPage, HeaderComponent]
})
export class SubproductsPageModule {}
