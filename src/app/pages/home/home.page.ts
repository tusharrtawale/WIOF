import { Component, OnInit } from '@angular/core';
import { CoffeeConversationService } from 'src/app/services/coffee-conversation.service';
import { NgoInFocusService } from 'src/app/services/ngo-in-focus.service';
import { Observable } from 'rxjs';
import { CoffeeConversation } from 'src/app/models/CoffeeConversation';
import { NgoInFocus } from 'src/app/models/NgoInFocus';
import { CourseInFocusService } from 'src/app/services/course-in-focus.service';
import { CourseInFocus } from 'src/app/models/courseInFocus';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/News';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  viewConsentPopup = true;
  ribbonCut = false;
  counter = 5;
  buttonClicked = false;
  coffeeConversations$: Observable<CoffeeConversation[]>;
  ngoInFocus$: Observable<NgoInFocus>;
  courseInFocus$: Observable<CourseInFocus>;
  newsList$: Observable<News[]>;

  constructor(
    private coffeeConvService: CoffeeConversationService,
    private ngoInFocusService: NgoInFocusService,
    private courseInFocusService: CourseInFocusService,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    // inauguration code
    // const ribbonCut = localStorage.getItem('ribbonCut');
    // this.ribbonCut = ribbonCut === 'true' ? true : false;
    // const curtainEl = document.getElementById('curtain-id');
    // if (this.ribbonCut && curtainEl) {
    //   curtainEl.style.display = 'none';
    // }

    const privacyConsentAccepted = localStorage.getItem(
      'privacyConsentAccepted'
    );
    this.viewConsentPopup = privacyConsentAccepted === 'true' ? false : true;
    this.newsList$ = this.newsService.getAllNews();
    this.coffeeConversations$ = this.coffeeConvService.getCoffeeConversations();
    this.ngoInFocus$ = this.ngoInFocusService.getActiveNgoInFocus();
    this.courseInFocus$ = this.courseInFocusService.getActiveCourseInFocus();
  }

  onAccept() {
    this.viewConsentPopup = false;
    localStorage.setItem('privacyConsentAccepted', 'true');
  }

  // inauguration code
  // onOpening() {
  //   this.buttonClicked = true;
  //   setInterval(() => {
  //     this.counter--;
  //   }, 1000);

  //   setTimeout(() => {
  //     this.ribbonCut = true;
  //     localStorage.setItem('ribbonCut', 'true');
  //     setTimeout(() => {
  //       const curtainEl = document.getElementById('curtain-id');
  //       curtainEl.style.display = 'none';
  //     }, 3000);
  //   }, 5000);
  // }
}
