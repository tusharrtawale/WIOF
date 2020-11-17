import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { throwError, Subject, Observable } from "rxjs";
import { catchError, map, takeUntil, switchMap } from "rxjs/operators";
import { Blog } from "src/app/models/Blog";
import { BlogService } from "src/app/services/blog.service";
import { UiUtilService } from "src/app/util/UiUtilService";
import { Months } from "src/app/app.constants";

@Component({
  selector: "app-manage-blog",
  templateUrl: "./manage-blog.page.html",
  styleUrls: ["./manage-blog.page.scss"]
})
export class ManageBlogPage implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  blogList$: Observable<Blog[]>;

  constructor(
    private blogService: BlogService,
    private uiUtil: UiUtilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initPage();
  }

  initPage() {
    this.blogList$ = this.blogService.getBlogs().pipe(
      takeUntil(this.destroy$),
      map((blogList) => {
        return blogList.sort(
          (a, b) =>
            new Date(b.submitDate).getTime() - new Date(a.submitDate).getTime()
        );
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  refreshData() {
    this.initPage();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  public async deleteBlog(
    blogList: Blog[],
    index: number,
    blogId: string,
    blogImage: string
  ) {
    this.uiUtil.presentAlert(
      "Confirm",
      "Are you sure you want to delete the blog?",
      [
        {
          text: "Yes",
          handler: async () => {
            await this.delBlog(blogList, index, blogId, blogImage);
          }
        },
        {
          text: "No",
          role: "cancel"
        }
      ]
    );
  }

  private async delBlog(
    blogList: Blog[],
    index: number,
    blogId: string,
    blogImage: string
  ) {
    const loader = await this.uiUtil.showLoader("We are deleting the blog...");
    this.blogService
      .deleteBlogImage(blogImage)
      .pipe(
        takeUntil(this.destroy$),
        switchMap((data) => {
          return this.blogService.deleteBlog(blogId);
        })
      )
      .subscribe(
        //TODO handle delete error case
        (response) => {
          console.log(response);
          loader.dismiss();
          this.uiUtil.presentAlert("Success", "Blog successfully deleted!", [
            "OK"
          ]);
          blogList.splice(index, 1);
        },
        (error) => {
          console.log(error);
          loader.dismiss();
          this.uiUtil.presentAlert(
            "Error",
            "Uh Oh! We could not delete the blog. Please try again.",
            ["OK"]
          );
        }
      );
  }

  viewBlogDetails(blog: Blog) {
    this.blogService.setViewEditModeBlog(blog);
    this.router.navigate(["blog", "edit"], {
      relativeTo: this.route,
      queryParams: { id: blog.id }
    });
  }

  addNewBlog() {
    this.router.navigate(["blog", "new"], { relativeTo: this.route });
  }
}
