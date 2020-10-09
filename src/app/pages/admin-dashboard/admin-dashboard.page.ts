import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.page.html",
  styleUrls: ["./admin-dashboard.page.scss"],
})
export class AdminDashboardPage implements OnInit {
  constructor(private afAuthService: AuthService, private router: Router) {}
  adminDB = {
    buttons: [
      {
        name: "Add Blog",
        actionUrl: "add-blog",
      },
      {
        name: "Add Poll",
        actionUrl: "add-poll",
      },
      {
        name: "Manage Polls",
        actionUrl: "manage-polls",
      },
    ],
  };

  ngOnInit() {}

  onLogout() {
    this.afAuthService.logout();
    this.router.navigate(["/login"]);
  }
}
