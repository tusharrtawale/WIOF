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
  constructor(private route: ActivatedRoute) {
    const url_array = this.route.snapshot["_routerState"].url.split("/");
    this.selectElement(url_array[2]);
  }

  ngOnInit() {
    console.log(this.element);
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
