import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { AqiWidgetComponent } from "./components/aqi-widget/aqi-widget.component";
import { BlogCardComponent } from "./components/blog-card/blog-card.component";
import { BlogSliderComponent } from "./components/blog-slider/blog-slider.component";
import { ElementWelcomeImageComponent } from "./components/element-welcome-image/element-welcome-image.component";
import { HeaderComponent } from "./components/header/header.component";
import { LifeElementsComponent } from "./components/life-elements/life-elements.component";
import { SubscribeComponent } from "./components/subscribe/subscribe.component";
import { VideoSliderComponent } from "./components/video-slider/video-slider.component";
import { WiofFooterComponent } from "./components/wiof-footer/wiof-footer.component";
import { WaterWidgetComponent} from "./components/water-widget/water-widget.component";
import { VideoWidgetComponent } from "./components/video-widget/video-widget.component";
import { EQWidgetComponent } from "./components/eq-widget/eq-widget.component";

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
    BlogCardComponent,
    ElementWelcomeImageComponent,
    AqiWidgetComponent,
    ReactiveFormsModule ,
    SubscribeComponent,
    WaterWidgetComponent,
    VideoWidgetComponent,
    EQWidgetComponent,
    ReactiveFormsModule,
    SubscribeComponent,
  ],
  declarations: [
    HeaderComponent,
    LifeElementsComponent,
    WiofFooterComponent,
    VideoSliderComponent,
    BlogSliderComponent,
    BlogCardComponent,
    ElementWelcomeImageComponent,
    AqiWidgetComponent,
    SubscribeComponent,
    WaterWidgetComponent,
    VideoWidgetComponent,
    EQWidgetComponent
  ],
  providers: [],
})
export class AppCommonModule {}
