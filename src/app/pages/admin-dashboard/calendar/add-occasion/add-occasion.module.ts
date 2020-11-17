import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddOccasionPageRoutingModule } from "./add-occasion-routing.module";

import { AddOccasionPage } from "./add-occasion.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddOccasionPageRoutingModule
  ],
  declarations: [AddOccasionPage]
})
export class AddOccasionPageModule {}
