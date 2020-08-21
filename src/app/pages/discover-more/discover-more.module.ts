import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverMorePageRoutingModule } from './discover-more-routing.module';

import { DiscoverMorePage } from './discover-more.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverMorePageRoutingModule
  ],
  declarations: [DiscoverMorePage]
})
export class DiscoverMorePageModule {}
