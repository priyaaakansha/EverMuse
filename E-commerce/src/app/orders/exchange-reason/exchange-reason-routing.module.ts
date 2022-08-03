import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExchangeReasonPage } from './exchange-reason.page';

const routes: Routes = [
  {
    path: '',
    component: ExchangeReasonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangeReasonPageRoutingModule {}
