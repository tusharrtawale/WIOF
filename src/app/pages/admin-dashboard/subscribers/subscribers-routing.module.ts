import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscribersPage } from './subscribers.page';

const routes: Routes = [
  {
    path: '',
    component: SubscribersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscribersPageRoutingModule {}
