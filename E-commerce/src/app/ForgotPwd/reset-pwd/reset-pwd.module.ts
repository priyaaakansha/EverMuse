import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPwdPageRoutingModule } from './reset-pwd-routing.module';

import { ResetPwdPage } from './reset-pwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPwdPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ResetPwdPage]
})
export class ResetPwdPageModule {}
