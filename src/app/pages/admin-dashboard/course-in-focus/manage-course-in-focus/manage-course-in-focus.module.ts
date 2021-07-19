import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageCourseInFocusPageRoutingModule } from './manage-course-in-focus-routing.module';

import { ManageCourseInFocusPage } from './manage-course-in-focus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageCourseInFocusPageRoutingModule
  ],
  declarations: [ManageCourseInFocusPage]
})
export class ManageCourseInFocusPageModule {}
