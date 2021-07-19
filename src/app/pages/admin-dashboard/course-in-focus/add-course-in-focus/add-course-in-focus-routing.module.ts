import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCourseInFocusPage } from './add-course-in-focus.page';

const routes: Routes = [
  {
    path: '',
    component: AddCourseInFocusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCourseInFocusPageRoutingModule {}
