import { Component, OnInit } from "@angular/core";
import { ElementRef, ViewChild } from "@angular/core";
import { CoffeeConversationService } from "src/app/services/coffee-conversation.service";
import { NgoInFocusService } from "src/app/services/ngo-in-focus.service";
import { Observable } from "rxjs";
import { CoffeeConversation } from "src/app/models/CoffeeConversation";
import { iNgoInFocus } from "src/app/models/NgoInFocus";
import { CourseInFocusService } from "src/app/services/course-in-focus.service";
import { iCourseInFocus } from "src/app/models/courseInFocus";


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
  ngoInFocus$: Observable<iNgoInFocus[]>
  courseInFocus$: Observable<iCourseInFocus[]>

  inputList = [
    { name: 'Amit', age: 25, city: 'Bengaluru' },
    { name: 'Pankaj', age: 30, city: 'Bengaluru' },
    { name: 'Nitin', age: 28, city: 'Mumbai' },
    { name: 'Ganesh', age: 23, city: 'Mumbai' },
    { name: 'Rajesh', age: 32, city: 'Chennai' }
  ];

  constructor(private coffeeConvService: CoffeeConversationService,
    private ngoInFocusService: NgoInFocusService,
    private courseInFocusService: CourseInFocusService
    ) {}

  ngOnInit() {
    // inauguration code
    const ribbonCut = localStorage.getItem('ribbonCut');
    this.ribbonCut = ribbonCut === 'true' ? true : false;
    const curtainEl = document.getElementById('curtain-id');
    if (this.ribbonCut && curtainEl) {
      curtainEl.style.display = 'none';
    }

    const privacyConsentAccepted = localStorage.getItem(
      'privacyConsentAccepted'
    );
    this.viewConsentPopup = privacyConsentAccepted === 'true' ? false : true;
    this.coffeeConversations$ = this.coffeeConvService.getCoffeeConversations();
    this.ngoInFocus$ = this.ngoInFocusService.getNgoInFocus();
    this.courseInFocus$ = this.courseInFocusService.getCourseInFocus();

    console.log(this.convertList());

  }

  convertList(){
    let outputList = new Object();
    this.inputList.forEach(element => {
        if ( outputList[element['city']]){
          outputList[element['city']].push(element);
        }
        else {
          outputList[element['city']] = [];
          outputList[element['city']].push(element);
        }
    });
    return outputList;
  }

  onAccept() {
    this.viewConsentPopup = false;
    localStorage.setItem('privacyConsentAccepted', 'true');
  }

  // inauguration code
  onOpening() {
    this.buttonClicked = true;
    setInterval(() => {
      this.counter--;
    }, 1000);

    setTimeout(() => {
      this.ribbonCut = true;
      localStorage.setItem('ribbonCut', 'true');
      setTimeout(() => {
        const curtainEl = document.getElementById('curtain-id');
        curtainEl.style.display = 'none';
      }, 3000);
    }, 5000);
  }
}
