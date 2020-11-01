import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDashboardPage } from "./admin-dashboard.page";

const routes: Routes = [
  {
    path: "",
    component: AdminDashboardPage,
  },
  {
    path: "manage-polls",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./poll/manage-polls/manage-polls.module").then(
            (m) => m.ManagePollsPageModule
          ),
      },
      {
        path: "poll/:mode",
        loadChildren: () =>
          import("./poll/add-poll/add-poll.module").then(
            (m) => m.AddPollPageModule
          ),
      },
    ],
  },
  {
    path: "manage-news",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./news/manage-news/manage-news.module").then(
            (m) => m.ManageNewsPageModule
          ),
      },
      {
        path: "news/:mode",
        loadChildren: () =>
          import("./news/add-news/add-news.module").then(
            (m) => m.AddNewsPageModule
          ),
      },
    ],
  },
  {
    path: "manage-calendar",
    loadChildren: () =>
      import("./manage-calendar/manage-calendar.module").then(
        (m) => m.ManageCalendarPageModule
      ),
  },
  {
    path: "manage-blog",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./blog/manage-blog/manage-blog.module").then(
            (m) => m.ManageBlogPageModule
          ),
      },
      {
        path: "blog/:mode",
        loadChildren: () =>
          import("./blog/add-blog/add-blog.module").then(
            (m) => m.AddBlogPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardPageRoutingModule {}
