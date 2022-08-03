import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogincopyPage } from './logincopy.page';

const routes: Routes = [
  {
    path: '',
    component: LogincopyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogincopyPageRoutingModule {}
