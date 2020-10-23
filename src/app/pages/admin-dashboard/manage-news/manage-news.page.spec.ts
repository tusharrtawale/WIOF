import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageNewsPage } from './manage-news.page';

describe('ManageNewsPage', () => {
  let component: ManageNewsPage;
  let fixture: ComponentFixture<ManageNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
