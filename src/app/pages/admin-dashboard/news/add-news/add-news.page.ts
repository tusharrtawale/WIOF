import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject, throwError } from "rxjs";
import { catchError, switchMap, takeUntil } from "rxjs/operators";
import { MEDIA_TYPE, PAGE_CATEGORY_MAP } from "src/app/app.constants";
import { News } from "src/app/models/News";
import { NewsService } from "src/app/services/news.service";
import { AppUtilService } from "src/app/util/AppUtilService";
import { UiUtilService } from "src/app/util/UiUtilService";

@Component({
  selector: "app-add-news",
  templateUrl: "./add-news.page.html",
  styleUrls: ["./add-news.page.scss"],
})
export class AddNewsPage implements OnInit {
  isEditMode: boolean = false;
  news: News = {} as News;
  addNewsForm: FormGroup;
  loader;
  destroy$: Subject<boolean> = new Subject();
  imageToDisplay: string;
  imageToSave: any;
  categories: String[] = Object.values(PAGE_CATEGORY_MAP);

  pageContent = {
    addNewsTitle: "Add News",
    editNewsTitle: "Edit News",
    headlineLabel: "Headline",
    contentLabel: "Overview",
    categoryLabel: "Category",
    newsDateLabel: "News Date",
    mediaLinkLabel: "Media Link",
    selectImageLabel: "Select Image",
    mediaTypeLabel: "Media Type",
    newsSourceLabel: "News Source URL",
    newsSourceDescLabel:
      "Link to read more information about the news or news source",
    saveNewsLabel: "Save",
    cancelLabel: "Cancel",
  };

  constructor(
    private uiUtil: UiUtilService,
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router,
    private appUtil: AppUtilService
  ) {}

  ngOnInit() {
    this.news = {} as News;
    this.route.paramMap.subscribe((param) => {
      if (param.has("mode") && param.get("mode") === "edit") {
        this.news = this.newsService.getViewEditModeNews();
        this.news.imageLink.subscribe((imageData) => {
          this.imageToDisplay = imageData;
        });
        if (!this.news) {
          this.router.navigateByUrl("/admin-dashboard/manage-news");
          return;
        }
        this.isEditMode = true;
        this.addNewsForm = this.initFormByNews(this.news);
      } else {
        this.isEditMode = false;
        this.addNewsForm = this.initForm();
      }
    });

    this.addNewsForm.get("mediaType").valueChanges.subscribe((mediaType) => {
      if (mediaType === MEDIA_TYPE.IMAGE) {
        this.addNewsForm.get("image").setValidators(Validators.required);
      } else if (mediaType === MEDIA_TYPE.VIDEO) {
        this.addNewsForm.get("imediaLink").setValidators(Validators.required);
      }
    });
  }

  private initForm() {
    return new FormGroup({
      headline: new FormControl("", Validators.required),
      content: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      date: new FormControl("", Validators.required),
      mediaType: new FormControl("", Validators.required),
      mediaLink: new FormControl(""),
      image: new FormControl(""),
    });
  }

  private initFormByNews(news: News) {
    return new FormGroup({
      headline: new FormControl(news.headline, Validators.required),
      content: new FormControl(news.content, Validators.required),
      category: new FormControl(news.category, Validators.required),
      date: new FormControl(new Date(news.date), Validators.required),
      mediaType: new FormControl(news.mediaType, Validators.required),
      mediaLink: new FormControl(news.mediaLink),
      image: new FormControl(""),
    });
  }

  onFileSelected(event) {
    this.appUtil.onFileSelected(event, this);
  }

  async onSubmit() {
    if (this.addNewsForm.valid) {
      console.log(this.addNewsForm.value);
      this.news = this.createByForm(
        this.addNewsForm,
        this.news,
        this.isEditMode
      );
      this.loader = await this.uiUtil.showLoader("We are saving your news...");
      this.newsService
        .saveNewsImage(this.imageToSave, this.news.mediaLink)
        .pipe(
          switchMap((data) => {
            console.log(data);
            return this.newsService.saveNews(this.news);
          }),
          takeUntil(this.destroy$),
          catchError((err) => {
            return throwError(err);
          })
        )
        .subscribe(
          (response) => {
            this.loader.dismiss();
            if (!this.isEditMode) {
              this.addNewsForm.reset();
            }
            this.uiUtil.presentAlert("Success", "We saved your news!", [
              "Cool!",
            ]);
          },
          (error) => {
            console.log(error);
            this.loader.dismiss();
            this.uiUtil.presentAlert(
              "Error",
              "Uh oh! We could not save it. Please try again.",
              ["OK"]
            );
          }
        );
    }
  }

  private createByForm(
    addNewsForm: FormGroup,
    news: News,
    isEditMode: boolean
  ) {
    return new News(
      isEditMode ? news.newsId : null,
      addNewsForm.value.headline,
      addNewsForm.value.content,
      addNewsForm.value.category,
      new Date(addNewsForm.value.date).getTime(),
      this.appUtil.formatImageName(addNewsForm.value.image),
      addNewsForm.value.mediaType
    );
  }
}
