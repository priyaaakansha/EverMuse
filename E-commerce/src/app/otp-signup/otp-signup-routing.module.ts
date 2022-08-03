import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpSignupPage } from './otp-signup.page';

const routes: Routes = [
  {
    path: '',
    component: OtpSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpSignupPageRoutingModule {}
