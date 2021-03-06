import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.page.html",
  styleUrls: ["./admin-dashboard.page.scss"]
})
export class AdminDashboardPage implements OnInit {
  constructor(private afAuthService: AuthService, private router: Router) {}
  adminDB = {
    buttons: [
      {
        name: "Manage Blogs",
        actionUrl: "manage-blog"
      },
      {
        name: "Manage Polls",
        actionUrl: "manage-polls"
      },
      {
        name: "Manage Breaking News",
        actionUrl: "manage-news"
      },
      {
        name: "Manage Calendar",
        actionUrl: "manage-calendar"
      },
      {
        name: "Manage Coffee Conversations",
        actionUrl: "manage-coffee-conversation"
      },
      // {
      //   name: "Manage In Focus",
      //   actionUrl: "manage-in-focus"
      // },
      {
        name: "Manage In Focus",
        actionUrl: "manage-in-focus"
      },
      {
        name: "View Subscriptions",
        actionUrl: "subscribers"
      }
    ]
  };

  ngOnInit() {}

  onLogout() {
    this.afAuthService.logout();
    this.router.navigate(["/login"]);
  }
}
