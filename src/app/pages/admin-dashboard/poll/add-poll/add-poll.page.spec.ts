import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPollPage } from './add-poll.page';

describe('AddPollPage', () => {
  let component: AddPollPage;
  let fixture: ComponentFixture<AddPollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddPollPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
