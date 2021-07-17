import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/app-common.module';
import { WaterPageRoutingModule } from './water-routing.module';
import { WaterPage } from './water.page';

@NgModule({
  imports: [AppCommonModule, WaterPageRoutingModule],
  declarations: [WaterPage]
})
export class WaterPageModule {}
