import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ManageNewsPageRoutingModule } from "./manage-news-routing.module";

import { ManageNewsPage } from "./manage-news.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageNewsPageRoutingModule
  ],
  declarations: [ManageNewsPage]
})
export class ManageNewsPageModule {}
