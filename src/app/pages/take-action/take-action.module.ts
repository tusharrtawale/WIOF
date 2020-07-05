import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCommonModule } from "src/app/app-common.module";


import { IonicModule } from '@ionic/angular';

import { TakeActionPageRoutingModule } from './take-action-routing.module';

import { TakeActionPage } from './take-action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeActionPageRoutingModule,
    AppCommonModule
  ],
  declarations: [TakeActionPage]
})
export class TakeActionPageModule {}
