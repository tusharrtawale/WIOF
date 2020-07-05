import { NgModule } from '@angular/core';
import { AppCommonModule } from "src/app/app-common.module";
import { SpiritPageRoutingModule } from './spirit-routing.module';
import { SpiritPage } from './spirit.page';

@NgModule({
  imports: [AppCommonModule, SpiritPageRoutingModule],
  declarations: [SpiritPage],
})
export class SpiritPageModule {}
