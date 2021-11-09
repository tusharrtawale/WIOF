import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable, throwError } from 'rxjs';
import { InFocus } from 'src/app/models/InFocus';
import { InFocusService } from 'src/app/services/in-focus.service';
import { UiUtilService } from 'src/app/util/UiUtilService';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil, catchError, map } from 'rxjs/operators';
import { UI_MESSAGES, ITEMS } from 'src/app/app.constants';

@Component({
  selector: 'app-manage-in-focus',
  templateUrl: './manage-in-focus.page.html',
  styleUrls: ['./manage-in-focus.page.scss']
})
export class ManageInFocusPage implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  inFocusList$: Observable<InFocus[]>;

  constructor(
    private inFocusService: InFocusService,
    private uiUtil: UiUtilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initPage();
  }

  initPage() {
    this.inFocusList$ = this.inFocusService.getInFocuses().pipe(
      takeUntil(this.destroy$),
      map((data) => data.sort((a, b) => (a.category < b.category ? -1 : 1))),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  refreshData() {
    this.initPage();
  }

  addInFocus() {
    this.router.navigate(['in-focus', 'new'], {
      relativeTo: this.route
    });
  }

  viewInFocusDetails(inFocus: InFocus) {
    this.inFocusService.setViewEditModeInFocus(inFocus);
    this.router.navigate(['in-focus', 'edit'], {
      relativeTo: this.route,
      queryParams: { id: inFocus.inFocusId }
    });
  }

  deleteInFocus(inFocusList: InFocus[], index: number, inFocusId: string) {
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
            await this.delInFocus(inFocusList, index, inFocusId);
          }
        },
        {
          text: UI_MESSAGES.CONFIRM_DELETE_SECONDARY_CTA,
          role: 'cancel'
        }
      ]
    );
  }

  private async delInFocus(
    inFocusList: InFocus[],
    index: number,
    inFocusId: string
  ) {
    const loader = await this.uiUtil.showLoader(
      UI_MESSAGES.DELETE_IN_PROGRESS.replace(
        UI_MESSAGES.PLACEHOLDER,
        ITEMS.IN_FOCUS
      )
    );
    this.inFocusService
      .deleteInFocus(inFocusId)
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
          inFocusList.splice(index, 1);
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

  publishInFocus(inFocusId: string) {
    this.inFocusService.publishInFocus(inFocusId).subscribe((data) => {
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

  unpublishInFocus(inFocusId: string) {
    this.inFocusService.unpublishInFocus(inFocusId).subscribe((data) => {
      console.log(data);
      this.uiUtil.presentAlert(
        UI_MESSAGES.SUCCESS_HEADER,
        UI_MESSAGES.SUCCESS_UNPUBLISH_ITEM_DESC.replace(
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
