import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageCourseInFocusPage } from './manage-course-in-focus.page';

const routes: Routes = [
  {
    path: '',
    component: ManageCourseInFocusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCourseInFocusPageRoutingModule {}
