import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpiritPage } from './spirit.page';

const routes: Routes = [
  {
    path: '',
    component: SpiritPage
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('../blog-post/blog-post.module').then((m) => m.BlogPostPageModule)
  },
  {
    path: 'video',
    loadChildren: () =>
      import('../video-post/video-post.module').then(
        (m) => m.VideoPostPageModule
      )
  },
  {
    path: 'take-action',
    loadChildren: () =>
      import('../take-action/take-action.module').then(
        (m) => m.TakeActionPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpiritPageRoutingModule {}
