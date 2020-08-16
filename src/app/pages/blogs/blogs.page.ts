import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "src/app/services/blog.service";
import { PAGE_CATEGORY_MAP } from "src/app/app.constants";

@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.page.html",
  styleUrls: ["./blogs.page.scss"],
})
export class BlogsPage implements OnInit {
  blogs: any;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((paramsMap) => {
      if (paramsMap["element"]) {
        this.blogs = this.blogService.getBlogs(
          PAGE_CATEGORY_MAP[paramsMap["element"]]
        );
      }
    });
  }
}
