import { Component, Input, OnInit } from '@angular/core';
import { COFFEE_CONV_SLIDER_OPTIONS } from 'src/app/app.constants';
import { CoffeeConversation } from 'src/app/models/CoffeeConversation';

@Component({
  selector: 'app-coffee-conversation',
  templateUrl: './coffee-conversation.component.html',
  styleUrls: ['./coffee-conversation.component.scss']
})
export class CoffeeConversationComponent implements OnInit {
  @Input() coffeeConvList: Array<CoffeeConversation>;
  @Input() element: string;
  @Input() fromHomePage: boolean;

  slideOpts = COFFEE_CONV_SLIDER_OPTIONS;
  coffeeConvClass: string;

  constructor() {}

  ngOnInit() {
    this.coffeeConvClass = `wiof-${this.element}`;
  }
}
