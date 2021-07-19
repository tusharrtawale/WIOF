import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/app-common.module';
import { EarthPageRoutingModule } from './earth-routing.module';
import { EarthPage } from './earth.page';

@NgModule({
  imports: [AppCommonModule, EarthPageRoutingModule],
  declarations: [EarthPage]
})
export class EarthPageModule {}
