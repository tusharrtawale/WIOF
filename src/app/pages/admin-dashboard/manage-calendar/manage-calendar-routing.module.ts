import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageCalendarPage } from './manage-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: ManageCalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageCalendarPageRoutingModule {}
