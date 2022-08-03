import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateprofilePageRoutingModule } from './createprofile-routing.module';

import { CreateprofilePage } from './createprofile.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateprofilePageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [CreateprofilePage]
})
export class CreateprofilePageModule {}
