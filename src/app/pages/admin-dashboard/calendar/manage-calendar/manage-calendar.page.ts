import { Component, OnInit } from "@angular/core";
import { EnvDay } from "src/app/models/env-cal-data";
import { Subject, Observable, throwError } from "rxjs";
import { UiUtilService } from "src/app/util/UiUtilService";
import { Router, ActivatedRoute } from "@angular/router";
import { EnvcalService } from "src/app/services/envcal-service";
import { takeUntil, switchMap, map, catchError } from "rxjs/operators";
import { Months } from "src/app/app.constants";

@Component({
  selector: "app-manage-calendar",
  templateUrl: "./manage-calendar.page.html",
  styleUrls: ["./manage-calendar.page.scss"]
})
export class ManageCalendarPage implements OnInit {
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
    this.initPage();
  }

  refreshData() {
    this.initPage();
  }

  initPage() {
    this.selectedMonth = new Date().getMonth();
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
      "Confirm",
      "Are you sure you want to delete the occasion?",
      [
        {
          text: "Yes",
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
          text: "No",
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
            "Success",
            "Occasion successfully deleted!",
            ["OK"]
          );
          occasionList.splice(index, 1);
        },
        (error) => {
          console.log(error);
          loader.dismiss();
          this.uiUtil.presentAlert(
            "Error",
            "Uh Oh! We could not delete the occasion. Please try again.",
            ["OK"]
          );
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
