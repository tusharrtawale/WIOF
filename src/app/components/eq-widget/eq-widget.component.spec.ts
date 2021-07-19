import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EQWidgetComponent } from './eq-widget.component';

describe('EQWidgetComponent', () => {
  let component: EQWidgetComponent;
  let fixture: ComponentFixture<EQWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EQWidgetComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EQWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
