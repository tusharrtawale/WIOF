import { Component, OnDestroy, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  wiofLogo: string = "../../assets/logo.png";
  sub: Subscription;
  colorName: string;
  constructor(public platform: Platform, private route: ActivatedRoute) {
    this.getColor();
  }

  ngOnInit() {}
  getColor() {
    // console.log(this.route.snapshot.url);
    const url_array = this.route.snapshot["_routerState"].url.split("/");
    if (url_array.includes("home")) {
      this.colorName = "home";
    } else if (url_array.includes("earth")) {
      this.colorName = "earth";
    } else if (url_array.includes("energy")) {
      this.colorName = "energy";
    } else if (url_array.includes("air")) {
      this.colorName = "airele";
    } else if (url_array.includes("water")) {
      this.colorName = "water";
    } else if (url_array.includes("spirit")) {
      this.colorName = "spirit";
    } else {
      this.colorName = "";
    }
  }
}
