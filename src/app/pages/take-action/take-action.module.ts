import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppCommonModule } from 'src/app/app-common.module';
import { TakeActionPageRoutingModule } from './take-action-routing.module';
import { TakeActionPage } from './take-action.page';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeActionPageRoutingModule,
    AppCommonModule,
    MatTabsModule
  ],
  declarations: [TakeActionPage]
})
export class TakeActionPageModule {}
