import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { BlogSliderComponent } from "./components/blog-slider/blog-slider.component";
import { ElementWelcomeImageComponent } from "./components/element-welcome-image/element-welcome-image.component";
import { HeaderComponent } from "./components/header/header.component";
import { LifeElementsComponent } from "./components/life-elements/life-elements.component";
import { VideoSliderComponent } from "./components/video-slider/video-slider.component";
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
    VideoSliderComponent,
    BlogSliderComponent,
    ElementWelcomeImageComponent,
  ],
  declarations: [
    HeaderComponent,
    LifeElementsComponent,
    WiofFooterComponent,
    VideoSliderComponent,
    BlogSliderComponent,
    ElementWelcomeImageComponent,
  ],
  providers: [],
})
export class AppCommonModule {}
