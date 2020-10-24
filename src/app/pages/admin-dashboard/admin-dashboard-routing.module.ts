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
  {
    path: "manage-polls",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./manage-polls/manage-polls.module").then(
            (m) => m.ManagePollsPageModule
          ),
      },
      {
        path: "poll/:mode",
        loadChildren: () =>
          import("./add-poll/add-poll.module").then((m) => m.AddPollPageModule),
      },
    ],
  },
  {
    path: "manage-news",
    loadChildren: () =>
      import("./manage-news/manage-news.module").then(
        (m) => m.ManageNewsPageModule
      ),
  },
  {
    path: "manage-calendar",
    loadChildren: () =>
      import("./manage-calendar/manage-calendar.module").then(
        (m) => m.ManageCalendarPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardPageRoutingModule {}
