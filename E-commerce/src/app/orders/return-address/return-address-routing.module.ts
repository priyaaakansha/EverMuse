import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnAddressPage } from './return-address.page';

const routes: Routes = [
  {
    path: '',
    component: ReturnAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnAddressPageRoutingModule {}
