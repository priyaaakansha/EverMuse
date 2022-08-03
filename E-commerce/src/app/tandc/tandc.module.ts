import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TandcPageRoutingModule } from './tandc-routing.module';

import { TandcPage } from './tandc.page';
import { HeaderComponent } from '../Components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TandcPageRoutingModule
  ],
  declarations: [TandcPage, HeaderComponent]
})
export class TandcPageModule {}
