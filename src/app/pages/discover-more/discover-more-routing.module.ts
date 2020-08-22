import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DiscoverMorePage } from "./discover-more.page";

const routes: Routes = [
  {
    path: "",
    component: DiscoverMorePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverMorePageRoutingModule {}
