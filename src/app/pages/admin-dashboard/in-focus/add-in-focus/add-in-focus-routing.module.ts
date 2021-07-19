import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddInFocusPage } from './add-in-focus.page';

const routes: Routes = [
  {
    path: '',
    component: AddInFocusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddInFocusPageRoutingModule {}
