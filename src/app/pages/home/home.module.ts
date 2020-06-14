import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HomePageRoutingModule } from "./home-routing.module";
import { HomePage } from "./home.page";
import { LifeElementsComponent } from 'src/app/components/life-elements/life-elements.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, LifeElementsComponent],
})
export class HomePageModule {}
