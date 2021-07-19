import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageNgoInFocusPageRoutingModule } from './manage-ngo-in-focus-routing.module';

import { ManageNgoInFocusPage } from './manage-ngo-in-focus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageNgoInFocusPageRoutingModule
  ],
  declarations: [ManageNgoInFocusPage]
})
export class ManageNgoInFocusPageModule {}
