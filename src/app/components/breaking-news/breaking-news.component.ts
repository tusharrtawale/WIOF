import {
  Component,
  OnInit,
  HostListener,
  Input,
  AfterViewInit,
} from "@angular/core";
import { BREAKING_NEWS_SLIDER_OPTIONS } from "src/app/app.constants";
import { News } from "src/app/models/News";
import { NewsService } from "../../services/news.service";

@Component({
  selector: "app-breaking-news",
  templateUrl: "./breaking-news.component.html",
  styleUrls: ["./breaking-news.component.scss"],
})
export class BreakingNewsComponent implements OnInit {
  newsList: Array<News>;
  videoSliderClass: String;
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

  slideOpts = BREAKING_NEWS_SLIDER_OPTIONS;

  constructor(private NewsService: NewsService) {}

  ngOnInit() {
    this.NewsService.getAllNews().subscribe((data) => {
      this.newsList = data;
      console.log(this.newsList);
    });
  }

  // showNavigator() {
  //   if (this.width >= 1024) {
  //     // slidesPerView: 4
  //     if (this.newsList.length < 5) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   } else if (this.width < 1024 && this.width >= 767) {
  //     // slidesPerView: 3
  //     if (this.newsList.length < 4) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   } else if (this.width < 767 && this.width >= 480) {
  //     // slidesPerView: 2
  //     if (this.newsList.length < 3) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   } else if (this.width < 480) {
  //     // slidesPerView: 1
  //     if (this.newsList.length < 2) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  // }
}
