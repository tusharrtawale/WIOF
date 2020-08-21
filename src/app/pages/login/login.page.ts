import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  error: string;
  wiofLogo: string = "../../assets/logo.jpg";

  constructor(private afService: AuthService, private router: Router) {}

  ngOnInit() {
    var logged_in = this.afService.getAuth().subscribe((user) => {
      if (user) {
        this.router.navigate(["/admin-dashboard"]);
      }
    });
  }

  onLogin() {
    this.afService
      .login(this.email, this.password)
      .then((res) => {
        this.router.navigate(["/admin-dashboard"]);
      })
      .catch((err) => {
        this.error = err;
      });
  }
}
