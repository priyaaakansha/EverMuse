import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogincopyPageRoutingModule } from './logincopy-routing.module';

import { LogincopyPage } from './logincopy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogincopyPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LogincopyPage]
})
export class LogincopyPageModule {}
