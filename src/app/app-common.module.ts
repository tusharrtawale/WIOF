import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { AqiWidgetComponent } from "./components/aqi-widget/aqi-widget.component";
import { BlogSliderComponent } from "./components/blog-slider/blog-slider.component";
import { ElementWelcomeImageComponent } from "./components/element-welcome-image/element-welcome-image.component";
import { HeaderComponent } from "./components/header/header.component";
import {SubscribeComponent} from "./components/subscribe/subscribe.component"
import { LifeElementsComponent } from "./components/life-elements/life-elements.component";
import { VideoSliderComponent } from "./components/video-slider/video-slider.component";
import { WiofFooterComponent } from "./components/wiof-footer/wiof-footer.component";

@NgModule({
  imports: [IonicModule, CommonModule, RouterModule, FormsModule],
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
    AqiWidgetComponent,
    ReactiveFormsModule ,
    SubscribeComponent
  ],
  declarations: [
    HeaderComponent,
    LifeElementsComponent,
    WiofFooterComponent,
    VideoSliderComponent,
    BlogSliderComponent,
    ElementWelcomeImageComponent,
    AqiWidgetComponent,
    SubscribeComponent
  ],
  providers: [],
})
export class AppCommonModule {}
