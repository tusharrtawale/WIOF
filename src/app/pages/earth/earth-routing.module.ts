import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EarthPage } from "./earth.page";

const routes: Routes = [
  {
    path: "",
    component: EarthPage,
  },
  {
    path: "blog-post",
    loadChildren: () =>
      import("../blog-post/blog-post.module").then((m) => m.BlogPostPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarthPageRoutingModule {}
