import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPollPage } from './add-poll.page';

const routes: Routes = [
  {
    path: '',
    component: AddPollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPollPageRoutingModule {}
