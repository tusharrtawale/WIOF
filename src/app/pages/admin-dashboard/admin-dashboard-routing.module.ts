import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDashboardPage } from "./admin-dashboard.page";

const routes: Routes = [
  {
    path: "",
    component: AdminDashboardPage,
  },
  {
    path: "add-blog",
    loadChildren: () =>
      import("./add-blog/add-blog.module").then((m) => m.AddBlogPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardPageRoutingModule {}
