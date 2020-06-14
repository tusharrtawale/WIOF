import { Component, OnInit } from "@angular/core";
import { BlogService } from 'src/app/services/blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: "app-element",
  templateUrl: "./element.page.html",
  styleUrls: ["./element.page.scss"],
})
export class ElementPage implements OnInit {
  blogs: Observable<Object>;
  slideOpts = {
    slidesPerView: 5,
    freeMode: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }
}
