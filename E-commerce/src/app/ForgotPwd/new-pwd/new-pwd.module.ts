import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPwdPageRoutingModule } from './new-pwd-routing.module';

import { NewPwdPage } from './new-pwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPwdPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewPwdPage]
})
export class NewPwdPageModule {}
