import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNgoInFocusPage } from './add-ngo-in-focus.page';

const routes: Routes = [
  {
    path: '',
    component: AddNgoInFocusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNgoInFocusPageRoutingModule {}
