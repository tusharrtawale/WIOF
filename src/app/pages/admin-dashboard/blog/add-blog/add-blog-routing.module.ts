import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddBlogPage } from "./add-blog.page";

const routes: Routes = [
  {
    path: "",
    component: AddBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBlogPageRoutingModule {}
