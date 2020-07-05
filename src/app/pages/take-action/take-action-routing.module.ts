import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakeActionPage } from './take-action.page';

const routes: Routes = [
  {
    path: '',
    component: TakeActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakeActionPageRoutingModule {}
