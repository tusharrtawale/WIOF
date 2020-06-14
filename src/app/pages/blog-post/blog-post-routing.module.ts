import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogPostPage } from "./blog-post.page";

const routes: Routes = [
  {
    path: ":blogId",
    component: BlogPostPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogPostPageRoutingModule {}
