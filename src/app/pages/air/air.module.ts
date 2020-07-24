import { NgModule } from "@angular/core";
import { AppCommonModule } from "src/app/app-common.module";
import { CommonModule } from '@angular/common';
import { AirPageRoutingModule } from "./air-routing.module";
import { AirPage } from "./air.page";
import {FormsModule} from "@angular/forms";
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [CommonModule,AppCommonModule,IonicModule, AirPageRoutingModule, FormsModule],
  declarations: [AirPage],
})
export class AirPageModule {}
