//Schema for the News

import { SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

export class News {
  newsId: string;
  headline: string;
  content: string;
  category: string;
  date: number;
  mediaLink: string;
  mediaType: string;
  sanitizedLink: SafeResourceUrl;
  image$: Observable<any>;
  newsSource: string;
  //tags: string[]
  //subcategory: string[]
  //indicator: string

  constructor(
    newsId,
    headline,
    content,
    category,
    date,
    mediaLink,
    mediaType,
    newsSource
  ) {
    this.newsId = newsId;
    this.headline = headline;
    this.category = category;
    this.content = content;
    this.date = date;
    this.mediaLink = mediaLink;
    this.mediaType = mediaType;
    this.newsSource = newsSource;
  }
}
