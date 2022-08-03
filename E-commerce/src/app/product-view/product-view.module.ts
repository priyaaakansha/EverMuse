import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductViewPageRoutingModule } from './product-view-routing.module';

import { ProductViewPage } from './product-view.page';
import { HeaderComponent } from '../Components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductViewPageRoutingModule
  ],
  declarations: [ProductViewPage, HeaderComponent]
})
export class ProductViewPageModule {}
