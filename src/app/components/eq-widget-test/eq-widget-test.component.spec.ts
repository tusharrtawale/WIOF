import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { EqWidgetTestComponent } from "./eq-widget-test.component";

describe("EqWidgetTestComponent", () => {
  let component: EqWidgetTestComponent;
  let fixture: ComponentFixture<EqWidgetTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EqWidgetTestComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(EqWidgetTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
