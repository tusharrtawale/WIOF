import {
  Component,
  HostListener,
  Input,
  AfterViewInit,
  OnChanges
} from '@angular/core';
import { BREAKING_NEWS_SLIDER_OPTIONS } from 'src/app/app.constants';
import { News } from 'src/app/models/News';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.scss']
})
export class BreakingNewsComponent implements AfterViewInit, OnChanges {
  @Input() newsList: Array<News>;
  videoSliderClass: string;
  width: number;
  isVideo: boolean;
  slideOpts = BREAKING_NEWS_SLIDER_OPTIONS;

  // handle youtube video
  videoLink: string;

  @HostListener('window:resize', [])
  public onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
    this.detectScreenSize();
  }

  detectScreenSize() {
    this.width = window.innerWidth;
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    if (this.newsList) {
      this.newsList.sort((a, b) => (a.date > b.date ? -1 : 1));
      this.newsList.forEach((news) => {
        if (news.mediaType === 'video') {
          news.sanitizedLink = this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${news.mediaLink}?controls=1`
          );
        }
      });
    }
  }
}
