import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgoPage } from './ngo.page';

const routes: Routes = [
  {
    path: '',
    component: NgoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgoPageRoutingModule {}
