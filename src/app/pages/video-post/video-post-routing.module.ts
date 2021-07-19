import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPostPage } from './video-post.page';

const routes: Routes = [
  {
    path: ':videoId',
    component: VideoPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoPostPageRoutingModule {}
