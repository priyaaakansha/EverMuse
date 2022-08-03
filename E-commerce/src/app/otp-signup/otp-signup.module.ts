import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpSignupPageRoutingModule } from './otp-signup-routing.module';

import { OtpSignupPage } from './otp-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpSignupPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OtpSignupPage]
})
export class OtpSignupPageModule {}
