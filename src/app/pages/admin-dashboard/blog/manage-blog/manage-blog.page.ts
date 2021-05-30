import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { throwError, Subject, Observable } from "rxjs";
import { catchError, map, takeUntil, switchMap } from "rxjs/operators";
import { Blog } from "src/app/models/Blog";
import { BlogService } from "src/app/services/blog.service";
import { UiUtilService } from "src/app/util/UiUtilService";
import { UI_MESSAGES, ITEMS } from "src/app/app.constants";

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
      UI_MESSAGES.CONFIRM_HEADER,
      UI_MESSAGES.CONFIRM_DELETE_ITEM_DESC.replace(
        UI_MESSAGES.PLACEHOLDER,
        ITEMS.BLOG
      ),
      [
        {
          text: UI_MESSAGES.CONFIRM_DELETE_PRIMARY_CTA,
          handler: async () => {
            await this.delBlog(blogList, index, blogId, blogImage);
          }
        },
        {
          text: UI_MESSAGES.CONFIRM_DELETE_SECONDARY_CTA,
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
    const loader = await this.uiUtil.showLoader(
      UI_MESSAGES.DELETE_IN_PROGRESS.replace(
        UI_MESSAGES.PLACEHOLDER,
        ITEMS.BLOG
      )
    );
    this.blogService
      .deleteBlogImage(blogImage)
      .pipe(
        takeUntil(this.destroy$),
        switchMap((data) => {
          return this.blogService.deleteBlog(blogId);
        })
      )
      .subscribe(
        (response) => {
          console.log(response);
          loader.dismiss();
          this.uiUtil.presentAlert(
            UI_MESSAGES.SUCCESS_HEADER,
            UI_MESSAGES.SUCCESS_DELETE_ITEM_DESC.replace(
              UI_MESSAGES.PLACEHOLDER,
              ITEMS.BLOG
            ),
            [UI_MESSAGES.FAILURE_CTA_TEXT]
          );
          blogList.splice(index, 1);
        },
        (error) => {
          console.log(error);
          loader.dismiss();
          this.uiUtil.presentAlert(
            UI_MESSAGES.FAILURE_HEADER,
            UI_MESSAGES.FAILURE_DELETE_ITEM_DESC.replace(
              UI_MESSAGES.PLACEHOLDER,
              ITEMS.BLOG
            ),
            [UI_MESSAGES.FAILURE_CTA_TEXT]
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
