import { NgModule } from '@angular/core';
import { AppCommonModule } from "src/app/app-common.module";
import { FirePageRoutingModule } from './fire-routing.module';
import { FirePage } from './fire.page';

@NgModule({
  imports: [
    AppCommonModule,
    FirePageRoutingModule
  ],
  declarations: [FirePage]
})
export class FirePageModule {}
