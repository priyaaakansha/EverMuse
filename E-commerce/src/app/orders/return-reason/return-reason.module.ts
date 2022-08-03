import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnReasonPageRoutingModule } from './return-reason-routing.module';

import { ReturnReasonPage } from './return-reason.page';
import { HeaderComponent } from 'src/app/Components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnReasonPageRoutingModule
  ],
  declarations: [ReturnReasonPage, HeaderComponent]
})
export class ReturnReasonPageModule {}
