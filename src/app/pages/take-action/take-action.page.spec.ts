import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TakeActionPage } from './take-action.page';

describe('TakeActionPage', () => {
  let component: TakeActionPage;
  let fixture: ComponentFixture<TakeActionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TakeActionPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakeActionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
