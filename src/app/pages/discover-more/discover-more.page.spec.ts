import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { DiscoverMorePage } from "./discover-more.page";

describe("DiscoverMorePage", () => {
  let component: DiscoverMorePage;
  let fixture: ComponentFixture<DiscoverMorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiscoverMorePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoverMorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
