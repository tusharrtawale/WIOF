import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddOccasionPage } from "./add-occasion.page";

const routes: Routes = [
  {
    path: "",
    component: AddOccasionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddOccasionPageRoutingModule {}
