import { Component, OnInit } from "@angular/core";
import { ElementRef, ViewChild } from "@angular/core";
import { CoffeeConversationService } from "src/app/services/coffee-conversation.service";
import { Observable } from "rxjs";
import { CoffeeConversation } from "src/app/models/CoffeeConversation";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  viewConsentPopup = true;
  ribbonCut = false;
  counter = 5;
  buttonClicked = false;
  coffeeConversations$: Observable<CoffeeConversation[]>;

  constructor(private coffeeConvService: CoffeeConversationService) {}

  ngOnInit() {
    // inauguration code
    const ribbonCut = localStorage.getItem("ribbonCut");
    this.ribbonCut = ribbonCut === "true" ? true : false;
    const curtainEl = document.getElementById("curtain-id");
    if (this.ribbonCut && curtainEl) {
      curtainEl.style.display = "none";
    }

    const privacyConsentAccepted = localStorage.getItem(
      "privacyConsentAccepted"
    );
    this.viewConsentPopup = privacyConsentAccepted === "true" ? false : true;
    this.coffeeConversations$ = this.coffeeConvService.getCoffeeConversations();
  }

  onAccept() {
    this.viewConsentPopup = false;
    localStorage.setItem("privacyConsentAccepted", "true");
  }

  // inauguration code
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
