import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ManageCoffeeConversationPageRoutingModule } from "./manage-coffee-conversation-routing.module";
import { ManageCoffeeConversationPage } from "./manage-coffee-conversation.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageCoffeeConversationPageRoutingModule
  ],
  declarations: [ManageCoffeeConversationPage]
})
export class ManageCoffeeConversationPageModule {}
