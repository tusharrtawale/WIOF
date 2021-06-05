import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageInFocusPage } from './manage-in-focus.page';

const routes: Routes = [
  {
    path: '',
    component: ManageInFocusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageInFocusPageRoutingModule {}
