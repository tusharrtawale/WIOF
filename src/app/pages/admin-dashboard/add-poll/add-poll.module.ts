import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddPollPageRoutingModule } from "./add-poll-routing.module";

import { AddPollPage } from "./add-poll.page";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    AddPollPageRoutingModule,
  ],
  declarations: [AddPollPage],
})
export class AddPollPageModule {}
