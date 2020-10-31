import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { combineLatest, Subject, throwError } from "rxjs";
import { catchError, map, takeUntil } from "rxjs/operators";
import { ELEMENT_BLOG_CATEGORY } from "src/app/app.constants";
import { Blog } from "src/app/models/Blog";
import { BlogService } from "src/app/services/blog.service";
import { UiUtilService } from "src/app/util/UiUtilService";
import { AppUtilService } from "src/app/util/AppUtilService";

@Component({
  selector: "app-add-blog",
  templateUrl: "./add-blog.page.html",
  styleUrls: ["./add-blog.page.scss"],
})
export class AddBlogPage implements OnInit, OnDestroy {
  categories: String[] = Object.values(ELEMENT_BLOG_CATEGORY);
  addBlogForm: FormGroup;
  imageToDisplay: string;
  imageToSave: any;
  loader;
  destroy$: Subject<boolean> = new Subject();

  constructor(
    private blogService: BlogService,
    private uiUtil: UiUtilService,
    private appUtil: AppUtilService
  ) {}

  ngOnInit() {
    this.addBlogForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      authorName: new FormControl("", [Validators.required]),
      aboutAuthor: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required]),
      subCategory: new FormControl("", [Validators.required]),
      image: new FormControl("", [Validators.required]),
      shortDescription: new FormControl("", [Validators.required]),
      content: new FormControl("", [Validators.required]),
    });
  }

  onFileSelected(event) {
    this.appUtil.onFileSelected(event, this);
  }

  async onSubmit() {
    if (this.addBlogForm.valid) {
      const blog = this.createByForm(this.addBlogForm);
      this.loader = await this.uiUtil.showLoader("We are saving your blog...");
      combineLatest([
        this.blogService.saveBlogImage(this.imageToSave, blog.imageName),
        this.blogService.saveBlog(blog),
      ])
        .pipe(
          takeUntil(this.destroy$),
          catchError((err) => {
            return throwError(err);
          })
        )
        .subscribe(
          ([imgResp, blogResp]) => {
            this.loader.dismiss();
            this.addBlogForm.reset();
            this.uiUtil.presentAlert("Success", "We saved your blog!", [
              "Cool!",
            ]);
          },
          (error) => {
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

  private createByForm(addBlogForm: FormGroup) {
    return new Blog(
      addBlogForm.value.title,
      addBlogForm.value.authorName,
      addBlogForm.value.aboutAuthor,
      addBlogForm.value.category,
      addBlogForm.value.subCategory,
      this.appUtil.formatImageName(addBlogForm.value.image),
      addBlogForm.value.shortDescription,
      addBlogForm.value.content
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
