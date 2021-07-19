import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageNewsPage } from './manage-news.page';

const routes: Routes = [
  {
    path: '',
    component: ManageNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageNewsPageRoutingModule {}
