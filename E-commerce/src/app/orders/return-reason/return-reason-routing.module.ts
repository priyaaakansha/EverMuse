import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnReasonPage } from './return-reason.page';

const routes: Routes = [
  {
    path: '',
    component: ReturnReasonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnReasonPageRoutingModule {}
