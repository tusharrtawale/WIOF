import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AddCoffeeConversationPage } from "./add-coffee-conversation.page";

describe("AddCoffeeConversationPage", () => {
  let component: AddCoffeeConversationPage;
  let fixture: ComponentFixture<AddCoffeeConversationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCoffeeConversationPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCoffeeConversationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
