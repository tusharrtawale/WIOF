import { Component, OnInit, OnDestroy } from "@angular/core";
import { EnvDay } from "src/app/models/env-cal-data";
import { Subject, Observable, throwError } from "rxjs";
import { UiUtilService } from "src/app/util/UiUtilService";
import { Router, ActivatedRoute } from "@angular/router";
import { EnvcalService } from "src/app/services/envcal-service";
import { takeUntil, switchMap, map, catchError } from "rxjs/operators";
import { Months, UI_MESSAGES } from "src/app/app.constants";

@Component({
  selector: "app-manage-calendar",
  templateUrl: "./manage-calendar.page.html",
  styleUrls: ["./manage-calendar.page.scss"]
})
export class ManageCalendarPage implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  occasionsList$: Observable<EnvDay[]>;
  selectedMonth: number;
  months = Months;

  constructor(
    private calendarService: EnvcalService,
    private uiUtil: UiUtilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.selectedMonth = new Date().getMonth();
    this.initPage();
  }

  refreshData() {
    this.initPage();
  }

  onSelectMonth() {
    this.initPage();
  }

  initPage() {
    this.occasionsList$ = this.calendarService
      .getEnvCal(this.selectedMonth)
      .pipe(
        takeUntil(this.destroy$),
        map((occasionList) => {
          return occasionList.sort(
            (a, b) => new Date(b.day).getTime() - new Date(a.day).getTime()
          );
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  addNewOccasion() {
    this.router.navigate(["occasion", "new"], { relativeTo: this.route });
  }

  viewOccasionDetails(occasion: EnvDay) {
    this.calendarService.setViewEditModeOccasion(occasion);
    this.router.navigate(["occasion", "edit"], {
      relativeTo: this.route,
      queryParams: { id: occasion.id }
    });
  }

  public async deleteOccasion(
    occasionList: EnvDay[],
    index: number,
    occasionId: string,
    occasionImage: string
  ) {
    this.uiUtil.presentAlert(
      UI_MESSAGES.CONFIRM_HEADER,
      UI_MESSAGES.CONFIRM_DELETE_ITEM_DESC.replace("$ITEM", "occassion"),
      [
        {
          text: UI_MESSAGES.CONFIRM_DELETE_PRIMARY_CTA,
          handler: async () => {
            await this.delOccasion(
              occasionList,
              index,
              occasionId,
              occasionImage
            );
          }
        },
        {
          text: UI_MESSAGES.CONFIRM_DELETE_SECONDARY_CTA,
          role: "cancel"
        }
      ]
    );
  }

  private async delOccasion(
    occasionList: EnvDay[],
    index: number,
    occasionId: string,
    occasionImage: string
  ) {
    const loader = await this.uiUtil.showLoader(
      "We are deleting the occasion..."
    );
    this.calendarService
      .deleteOccasionImage(occasionImage)
      .pipe(
        takeUntil(this.destroy$),
        switchMap((data) => {
          return this.calendarService.deleteOccasion(occasionId);
        })
      )
      .subscribe(
        //TODO handle delete error case
        (response) => {
          console.log(response);
          loader.dismiss();
          this.uiUtil.presentAlert(
            UI_MESSAGES.SUCCESS_HEADER,
            UI_MESSAGES.SUCCESS_DELETE_ITEM_DESC.replace("$ITEM", "Occasion"),
            [UI_MESSAGES.FAILURE_CTA_TEXT]
          );
          occasionList.splice(index, 1);
        },
        (error) => {
          console.log(error);
          loader.dismiss();
          this.uiUtil.presentAlert(
            UI_MESSAGES.FAILURE_HEADER,
            UI_MESSAGES.FAILURE_DELETE_ITEM_DESC.replace("$ITEM", "occasion"),
            [UI_MESSAGES.FAILURE_CTA_TEXT]
          );
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
