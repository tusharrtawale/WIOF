import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AirPage } from './air.page';

describe('AirPage', () => {
  let component: AirPage;
  let fixture: ComponentFixture<AirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AirPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
