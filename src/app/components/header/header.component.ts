import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  wiofLogo: string = "../../assets/logo.jpg";
  isIos: boolean;
  constructor(public platform: Platform) {}

  ngOnInit() {
    this.isIos = this.testiOS();
  }

  testiOS() {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  }
}
