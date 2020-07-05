import { NgModule } from '@angular/core';
import { AppCommonModule } from "src/app/app-common.module";
import { AirPageRoutingModule } from './air-routing.module';
import { AirPage } from './air.page';

@NgModule({
  imports: [
    AppCommonModule, 
    AirPageRoutingModule
  ],
  declarations: [AirPage]
})
export class AirPageModule {}
