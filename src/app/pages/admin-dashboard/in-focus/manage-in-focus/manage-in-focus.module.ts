import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageInFocusPageRoutingModule } from './manage-in-focus-routing.module';

import { ManageInFocusPage } from './manage-in-focus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageInFocusPageRoutingModule
  ],
  declarations: [ManageInFocusPage]
})
export class ManageInFocusPageModule {}
