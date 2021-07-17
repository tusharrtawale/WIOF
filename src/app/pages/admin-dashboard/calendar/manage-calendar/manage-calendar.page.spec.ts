import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageCalendarPage } from './manage-calendar.page';

describe('ManageCalendarPage', () => {
  let component: ManageCalendarPage;
  let fixture: ComponentFixture<ManageCalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCalendarPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
