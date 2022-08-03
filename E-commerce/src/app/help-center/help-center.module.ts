import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpCenterPageRoutingModule } from './help-center-routing.module';

import { HelpCenterPage } from './help-center.page';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpCenterPageRoutingModule
  ],
  declarations: [HelpCenterPage, HeaderComponent, FooterComponent]
})
export class HelpCenterPageModule {}
