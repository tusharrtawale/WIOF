import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddInFocusPage } from './add-in-focus.page';

describe('AddInFocusPage', () => {
  let component: AddInFocusPage;
  let fixture: ComponentFixture<AddInFocusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddInFocusPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddInFocusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
