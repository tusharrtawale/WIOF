import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoffeeConversationPage } from './add-coffee-conversation.page';

const routes: Routes = [
  {
    path: '',
    component: AddCoffeeConversationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCoffeeConversationPageRoutingModule {}
