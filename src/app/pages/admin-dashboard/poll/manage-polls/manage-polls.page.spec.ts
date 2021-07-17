import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagePollsPage } from './manage-polls.page';

describe('ManagePollsPage', () => {
  let component: ManagePollsPage;
  let fixture: ComponentFixture<ManagePollsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagePollsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagePollsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
