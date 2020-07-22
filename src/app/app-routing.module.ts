import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import {AuthGaurd} from './gaurds/auth.gaurd';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "element/earth",
    loadChildren: () =>
      import("./pages/earth/earth.module").then((m) => m.EarthPageModule),
  },
  {
    path: "element/earth",
    loadChildren: () =>
      import("./pages/air/air.module").then((m) => m.AirPageModule),
  },
  {
    path: "element/water",
    loadChildren: () =>
      import("./pages/water/water.module").then((m) => m.WaterPageModule),
  },
  {
    path: "element/energy",
    loadChildren: () =>
      import("./pages/fire/fire.module").then((m) => m.FirePageModule),
  },
  {
    path: "element/spirit",
    loadChildren: () =>
      import("./pages/spirit/spirit.module").then((m) => m.SpiritPageModule),
  },
  {
    path: "video-post",
    loadChildren: () =>
      import("./pages/video-post/video-post.module").then(
        (m) => m.VideoPostPageModule
      ),
  },
  {
    path: "element/water",
    loadChildren: () =>
      import("./pages/water/water.module").then((m) => m.WaterPageModule),
  },
  {
    path: "element/air",
    loadChildren: () =>
      import("./pages/air/air.module").then((m) => m.AirPageModule),
  },
  {
    path: "spirit",
    loadChildren: () =>
      import("./pages/spirit/spirit.module").then((m) => m.SpiritPageModule),
  },
  {
    path: "fire",
    loadChildren: () =>
      import("./pages/fire/fire.module").then((m) => m.FirePageModule),
  },
  {
    path: "take-action",
    loadChildren: () =>
      import("./pages/take-action/take-action.module").then(
        (m) => m.TakeActionPageModule
      ),
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./pages/admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule),
    canActivate:[AuthGaurd]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
