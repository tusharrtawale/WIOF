import { Component, Input, OnInit } from "@angular/core";
import { COFFEE_CONV_SLIDER_OPTIONS } from "src/app/app.constants";
import { CoffeeConversation } from "src/app/models/CoffeeConversation";

@Component({
  selector: "app-coffee-conversation",
  templateUrl: "./coffee-conversation.component.html",
  styleUrls: ["./coffee-conversation.component.scss"]
})
export class CoffeeConversationComponent implements OnInit {
  @Input() coffeeConvList: Array<CoffeeConversation>;
  @Input() element: string;
  slideOpts = COFFEE_CONV_SLIDER_OPTIONS;

  constructor() {}

  ngOnInit() {
    console.log(this.element);
  }
}
