import { HostListener, Component, Input, OnInit } from "@angular/core";
import { BLOG_SLIDER_OPTIONS } from "src/app/app.constants";
import { Blog } from "src/app/models/Blog";

@Component({
  selector: "app-blog-slider",
  templateUrl: "./blog-slider.component.html",
  styleUrls: ["./blog-slider.component.scss"]
})
export class BlogSliderComponent implements OnInit {
  @Input() blogList: Array<Blog>;
  @Input() element: String;
  blogSliderClass: string;
  slideOpts = BLOG_SLIDER_OPTIONS;
  width: number;

  @HostListener("window:resize", [])
  public onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
    this.detectScreenSize();
  }

  detectScreenSize() {
    this.width = window.innerWidth;
  }

  constructor() {}

  ngOnInit() {
    this.blogSliderClass = `wiof-${this.element}`;
  }
  showNavigator() {
    if (this.width >= 1024) {
      // slidesPerView: 4
      if (this.blogList.length < 5) {
        return false;
      } else {
        return true;
      }
    } else if (this.width < 1024 && this.width >= 767) {
      // slidesPerView: 3
      if (this.blogList.length < 4) {
        return false;
      } else {
        return true;
      }
    } else if (this.width < 767 && this.width >= 480) {
      // slidesPerView: 2
      if (this.blogList.length < 3) {
        return false;
      } else {
        return true;
      }
    } else if (this.width < 480) {
      // slidesPerView: 1
      if (this.blogList.length < 2) {
        return false;
      } else {
        return true;
      }
    }
  }
}
