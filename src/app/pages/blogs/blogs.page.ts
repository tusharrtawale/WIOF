import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "src/app/services/blog.service";
import { PAGE_CATEGORY_MAP } from "src/app/app.constants";
import { Blog } from "src/app/models/Blog";
import { Observable } from "rxjs";

@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.page.html",
  styleUrls: ["./blogs.page.scss"]
})
export class BlogsPage implements OnInit {
  blogs: Observable<Blog[]>;
  category: string = "";
  isLoading: boolean = false;
  element: string;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.has("element")) {
        this.category = PAGE_CATEGORY_MAP[params.get("element")];
        this.element = params.get("element");
        this.blogs = this.blogService.getBlogs(this.category);
      }
    });
  }
}
