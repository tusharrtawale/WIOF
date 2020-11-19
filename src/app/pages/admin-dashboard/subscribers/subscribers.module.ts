import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscribersPageRoutingModule } from './subscribers-routing.module';

import { SubscribersPage } from './subscribers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscribersPageRoutingModule
  ],
  declarations: [SubscribersPage]
})
export class SubscribersPageModule {}
