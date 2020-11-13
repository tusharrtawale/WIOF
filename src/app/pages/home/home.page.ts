import { Component, OnInit } from "@angular/core";
import { ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  viewConcentPopup = true;
  ribbonCut = false;
  counter = 5;
  buttonClicked = false;

  constructor() {}

  ngOnInit() {
    this.ribbonCut = !!localStorage.getItem("ribbonCut");
  }

  onAccept() {
    this.viewConcentPopup = false;
  }

  onOpening() {
    this.buttonClicked = true;
    setInterval(() => {
      this.counter--;
    }, 1000);

    setTimeout(() => {
      this.ribbonCut = true;
      localStorage.setItem("ribbonCut", "true");
      setTimeout(() => {
        const curtainEl = document.getElementById("curtain-id");
        curtainEl.style.display = "none";
      }, 3000);
    }, 5000);
  }
}
