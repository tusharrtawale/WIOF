import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NgoComponent } from './ngo.component';

describe('NgoComponent', () => {
  let component: NgoComponent;
  let fixture: ComponentFixture<NgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgoComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
