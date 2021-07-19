import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageCourseInFocusPage } from './manage-course-in-focus.page';

describe('ManageCourseInFocusPage', () => {
  let component: ManageCourseInFocusPage;
  let fixture: ComponentFixture<ManageCourseInFocusPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ManageCourseInFocusPage],
        imports: [IonicModule.forRoot()]
      }).compileComponents();

      fixture = TestBed.createComponent(ManageCourseInFocusPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
