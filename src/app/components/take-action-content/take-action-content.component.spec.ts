import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakeActionContentComponent } from './take-action-content.component';

describe('TakeActionContentComponent', () => {
  let component: TakeActionContentComponent;
  let fixture: ComponentFixture<TakeActionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TakeActionContentComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakeActionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
