import { Component, OnInit } from "@angular/core";
import { ELEMENTS } from "../../app.constants";
import { CARDCONTENTS } from "./card-contents";
import { PAGE_CATEGORY_MAP } from "../../app.constants";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-take-action",
  templateUrl: "./take-action.page.html",
  styleUrls: ["./take-action.page.scss"]
})
export class TakeActionPage implements OnInit {
  cardContent: any = CARDCONTENTS.EARTH;
  ELEMENTS = ELEMENTS;
  element: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.element);
    this.route.paramMap.subscribe((params) => {
      if (params.has("element")) {
        this.element = params.get("element");
        console.log(this.element);
        this.selectElement(this.element);
      }
    });
  }

  selectElement(element: string) {
    switch (element) {
      case ELEMENTS.EARTH: {
        this.cardContent = CARDCONTENTS.EARTH;
        break;
      }
      case ELEMENTS.ENERGY: {
        this.cardContent = CARDCONTENTS.ENERGY;
        break;
      }
      case ELEMENTS.AIR: {
        this.cardContent = CARDCONTENTS.AIR;
        break;
      }
      case ELEMENTS.WATER: {
        this.cardContent = CARDCONTENTS.WATER;
        break;
      }
      case ELEMENTS.SPIRIT: {
        this.cardContent = CARDCONTENTS.SPIRIT;
        break;
      }
    }
  }
}
