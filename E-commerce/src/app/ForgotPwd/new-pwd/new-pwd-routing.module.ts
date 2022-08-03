import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPwdPage } from './new-pwd.page';

const routes: Routes = [
  {
    path: '',
    component: NewPwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPwdPageRoutingModule {}
