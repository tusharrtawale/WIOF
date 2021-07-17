import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageCoffeeConversationPage } from './manage-coffee-conversation.page';

const routes: Routes = [
  {
    path: '',
    component: ManageCoffeeConversationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCoffeeConversationPageRoutingModule {}
