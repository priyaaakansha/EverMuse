import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangeReasonPageRoutingModule } from './exchange-reason-routing.module';

import { ExchangeReasonPage } from './exchange-reason.page';
import { HeaderComponent } from 'src/app/Components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExchangeReasonPageRoutingModule
  ],
  declarations: [ExchangeReasonPage, HeaderComponent]
})
export class ExchangeReasonPageModule {}
