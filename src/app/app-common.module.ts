import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "./components/header/header.component";
import { LifeElementsComponent } from "./components/life-elements/life-elements.component";
import { WiofFooterComponent } from "./components/wiof-footer/wiof-footer.component";

@NgModule({
  imports: [IonicModule, CommonModule, RouterModule],
  exports: [
    CommonModule,
    IonicModule,
    RouterModule,
    HeaderComponent,
    LifeElementsComponent,
    WiofFooterComponent,
  ],
  declarations: [HeaderComponent, LifeElementsComponent, WiofFooterComponent],
  providers: [],
})
export class AppCommonModule {}
