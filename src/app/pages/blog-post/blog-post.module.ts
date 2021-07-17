import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/app-common.module';
import { BlogPostPageRoutingModule } from './blog-post-routing.module';
import { BlogPostPage } from './blog-post.page';

@NgModule({
  imports: [AppCommonModule, BlogPostPageRoutingModule],
  declarations: [BlogPostPage]
})
export class BlogPostPageModule {}
