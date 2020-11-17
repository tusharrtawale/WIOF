import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ManagePollsPage } from "./manage-polls.page";

const routes: Routes = [
  {
    path: "",
    component: ManagePollsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePollsPageRoutingModule {}
