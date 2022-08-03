import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExchangeAddressPage } from './exchange-address.page';

const routes: Routes = [
  {
    path: '',
    component: ExchangeAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangeAddressPageRoutingModule {}
