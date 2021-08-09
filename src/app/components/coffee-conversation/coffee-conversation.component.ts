import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { COFFEE_CONV_SLIDER_OPTIONS } from 'src/app/app.constants';
import { CoffeeConversation } from 'src/app/models/CoffeeConversation';
import { AppUtilService } from 'src/app/util/AppUtilService';

@Component({
  selector: 'app-coffee-conversation',
  templateUrl: './coffee-conversation.component.html',
  styleUrls: ['./coffee-conversation.component.scss']
})
export class CoffeeConversationComponent implements OnInit, OnDestroy {
  @Input() coffeeConvList: Array<CoffeeConversation>;
  @Input() element: string;
  @Input() fromHomePage: boolean;
  showAboutInterviewee = false;

  slideOpts = COFFEE_CONV_SLIDER_OPTIONS;
  coffeeConvClass: string;

  constructor(private appUtilService: AppUtilService) {}

  showIntervieweeDetails(event, value) {
    event.preventDefault();
    event.stopPropagation();
    this.showAboutInterviewee = value;
  }

  ngOnInit() {
    this.coffeeConvClass = `wiof-${this.element}`;
  }

  ngOnDestroy(): void {
    this.appUtilService.stopVideos();
  }
}
