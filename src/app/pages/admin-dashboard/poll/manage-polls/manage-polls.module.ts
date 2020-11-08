import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ManagePollsPageRoutingModule } from "./manage-polls-routing.module";
import { ManagePollsPage } from "./manage-polls.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagePollsPageRoutingModule
  ],
  declarations: [ManagePollsPage]
})
export class ManagePollsPageModule {}
