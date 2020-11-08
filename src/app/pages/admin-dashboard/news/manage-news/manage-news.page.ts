import { Component, OnInit, OnDestroy } from "@angular/core";
import { NewsService } from "src/app/services/news.service";
import { News } from "src/app/models/News";
import { Subject, Observable, throwError, of } from "rxjs";
import { takeUntil, map, catchError, switchMap } from "rxjs/operators";
import { UiUtilService } from "src/app/util/UiUtilService";
import { Router, ActivatedRoute } from "@angular/router";
import { MEDIA_TYPE } from "src/app/app.constants";

@Component({
  selector: "app-manage-news",
  templateUrl: "./manage-news.page.html",
  styleUrls: ["./manage-news.page.scss"]
})
export class ManageNewsPage implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  newsList$: Observable<News[]>;

  constructor(
    private newsService: NewsService,
    private uiUtil: UiUtilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initPage();
  }

  initPage() {
    this.newsList$ = this.newsService.getAllNews().pipe(
      takeUntil(this.destroy$),
      map((newsList) => {
        return newsList
          .map((news) => {
            news.date = new Date().getTime();
            return news;
          })
          .sort((a, b) => b.date - a.date);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  refreshData() {
    this.initPage();
  }

  addBreakinNews() {
    this.router.navigate(["news", "new"], { relativeTo: this.route });
  }

  viewNewsDetails(news: News) {
    this.newsService.setViewEditModeNews(news);
    this.router.navigate(["news", "edit"], {
      relativeTo: this.route,
      queryParams: { id: news.newsId }
    });
  }

  deleteNews(newsList: News[], index: number, news: News) {
    this.uiUtil.presentAlert(
      "Confirm",
      "Are you sure you want to delete the news?",
      [
        {
          text: "Yes",
          handler: async () => {
            await this.delNews(newsList, index, news);
          }
        },
        {
          text: "No",
          role: "cancel"
        }
      ]
    );
  }

  private async delNews(newsList: News[], index: number, news: News) {
    const loader = await this.uiUtil.showLoader(
      "We are deleting the poll question..."
    );
    this.newsService
      .deleteNews(news.newsId)
      .pipe(
        takeUntil(this.destroy$),
        switchMap((data) => {
          if (news.mediaType == MEDIA_TYPE.IMAGE) {
            return this.newsService.deleteNewsImage(news.mediaLink);
          } else return of(true);
        })
      )
      .subscribe(
        //TODO handle delete error case
        (response) => {
          console.log(response);
          loader.dismiss();
          this.uiUtil.presentAlert("Success", "News successfully deleted!", [
            "OK"
          ]);
          newsList.splice(index, 1);
        },
        (error) => {
          console.log(error);
          loader.dismiss();
          this.uiUtil.presentAlert(
            "Error",
            "Uh Oh! We could not delete news. Please try again.",
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
