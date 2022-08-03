import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpEmailPage } from './otp-email.page';

const routes: Routes = [
  {
    path: '',
    component: OtpEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpEmailPageRoutingModule {}
