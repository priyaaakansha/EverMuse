import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubproductsPage } from './subproducts.page';

const routes: Routes = [
  {
    path: '',
    component: SubproductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubproductsPageRoutingModule {}
