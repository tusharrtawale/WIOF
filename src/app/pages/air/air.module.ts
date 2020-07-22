import { NgModule } from "@angular/core";
import { AppCommonModule } from "src/app/app-common.module";
import { AirPageRoutingModule } from "./air-routing.module";
import { AirPage } from "./air.page";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [AppCommonModule, AirPageRoutingModule, FormsModule],
  declarations: [AirPage],
})
export class AirPageModule {}
