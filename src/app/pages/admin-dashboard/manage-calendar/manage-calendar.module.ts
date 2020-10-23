import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageCalendarPageRoutingModule } from './manage-calendar-routing.module';

import { ManageCalendarPage } from './manage-calendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageCalendarPageRoutingModule
  ],
  declarations: [ManageCalendarPage]
})
export class ManageCalendarPageModule {}
