import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EarthPage } from './earth.page';

describe('EarthPage', () => {
  let component: EarthPage;
  let fixture: ComponentFixture<EarthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EarthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
