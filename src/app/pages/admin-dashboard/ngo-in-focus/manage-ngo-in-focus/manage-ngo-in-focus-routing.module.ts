import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageNgoInFocusPage } from './manage-ngo-in-focus.page';

const routes: Routes = [
  {
    path: '',
    component: ManageNgoInFocusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageNgoInFocusPageRoutingModule {}
