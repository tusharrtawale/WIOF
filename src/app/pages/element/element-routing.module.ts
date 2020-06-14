import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementPage } from './element.page';

const routes: Routes = [
  {
    path: ':element',
    component: ElementPage
  },
  {
    path: ':element/blog-post/:blogId',
    loadChildren: () => import('../blog-post/blog-post.module').then( m => m.BlogPostPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementPageRoutingModule {}
