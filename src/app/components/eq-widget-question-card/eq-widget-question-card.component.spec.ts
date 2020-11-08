import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { EqWidgetQuestionCardComponent } from "./eq-widget-question-card.component";

describe("EqWidgetQuestionCardComponent", () => {
  let component: EqWidgetQuestionCardComponent;
  let fixture: ComponentFixture<EqWidgetQuestionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EqWidgetQuestionCardComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EqWidgetQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
