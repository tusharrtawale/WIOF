import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable, throwError } from 'rxjs';
import { CourseInFocus } from 'src/app/models/CourseInFocus';
import { CourseInFocusService } from 'src/app/services/course-in-focus.service';
import { UiUtilService } from 'src/app/util/UiUtilService';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil, catchError, map } from 'rxjs/operators';
import { UI_MESSAGES, ITEMS } from 'src/app/app.constants';

@Component({
  selector: 'app-manage-course-in-focus',
  templateUrl: './manage-course-in-focus.page.html',
  styleUrls: ['./manage-course-in-focus.page.scss']
})
export class ManageCourseInFocusPage implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  courseInFocusList$: Observable<CourseInFocus[]>;

  constructor(
    private courseInFocusService: CourseInFocusService,
    private uiUtil: UiUtilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initPage();
  }

  initPage() {
    this.courseInFocusList$ = this.courseInFocusService
      .getCoursesInFocus()
      .pipe(
        takeUntil(this.destroy$),
        map((data) =>
          data.sort((a, b) => (a.submitDate < b.submitDate ? -1 : 1))
        ),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  refreshData() {
    this.initPage();
  }

  addCourseInFocus() {
    this.router.navigate(['course-in-focus', 'new'], {
      relativeTo: this.route
    });
  }

  viewCourseInFocusDetails(courseInFocus: CourseInFocus) {
    this.courseInFocusService.setViewEditModeCourseInFocus(courseInFocus);
    this.router.navigate(['course-in-focus', 'edit'], {
      relativeTo: this.route,
      queryParams: { id: courseInFocus.id }
    });
  }

  deleteCourseInFocus(
    courseInFocusList: CourseInFocus[],
    index: number,
    courseInFocus: CourseInFocus
  ) {
    this.uiUtil.presentAlert(
      UI_MESSAGES.CONFIRM_HEADER,
      UI_MESSAGES.CONFIRM_DELETE_ITEM_DESC.replace(
        UI_MESSAGES.PLACEHOLDER,
        ITEMS.IN_FOCUS
      ),
      [
        {
          text: UI_MESSAGES.CONFIRM_DELETE_PRIMARY_CTA,
          handler: async () => {
            await this.delCourseInFocus(
              courseInFocusList,
              index,
              courseInFocus
            );
          }
        },
        {
          text: UI_MESSAGES.CONFIRM_DELETE_SECONDARY_CTA,
          role: 'cancel'
        }
      ]
    );
  }

  private async delCourseInFocus(
    courseInFocusList: CourseInFocus[],
    index: number,
    courseInFocus: CourseInFocus
  ) {
    const loader = await this.uiUtil.showLoader(
      UI_MESSAGES.DELETE_IN_PROGRESS.replace(
        UI_MESSAGES.PLACEHOLDER,
        ITEMS.IN_FOCUS
      )
    );
    this.courseInFocusService
      .deleteCourseInFocus(courseInFocus.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (response) => {
          console.log(response);
          loader.dismiss();
          this.uiUtil.presentAlert(
            UI_MESSAGES.SUCCESS_HEADER,
            UI_MESSAGES.SUCCESS_DELETE_ITEM_DESC.replace(
              UI_MESSAGES.PLACEHOLDER,
              ITEMS.IN_FOCUS
            ),
            [UI_MESSAGES.FAILURE_CTA_TEXT]
          );
          courseInFocusList.splice(index, 1);
        },
        (error) => {
          console.log(error);
          loader.dismiss();
          this.uiUtil.presentAlert(
            UI_MESSAGES.FAILURE_HEADER,
            UI_MESSAGES.FAILURE_DELETE_ITEM_DESC.replace(
              UI_MESSAGES.PLACEHOLDER,
              ITEMS.IN_FOCUS
            ),
            [UI_MESSAGES.FAILURE_CTA_TEXT]
          );
        }
      );
  }

  publishCourseInFocus(id: string, category: string) {
    this.courseInFocusService
      .publishCourseInFocus(id, category)
      .subscribe((data) => {
        console.log(data);
        this.uiUtil.presentAlert(
          UI_MESSAGES.SUCCESS_HEADER,
          UI_MESSAGES.SUCCESS_PUBLISH_ITEM_DESC.replace(
            UI_MESSAGES.PLACEHOLDER,
            ITEMS.IN_FOCUS
          ),
          [UI_MESSAGES.FAILURE_CTA_TEXT]
        );
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
