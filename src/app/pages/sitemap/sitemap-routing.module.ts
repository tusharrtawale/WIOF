import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitemapPage } from './sitemap.page';

const routes: Routes = [
  {
    path: '',
    component: SitemapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitemapPageRoutingModule {}
