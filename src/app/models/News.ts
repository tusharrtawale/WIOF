//Schema for the News

import { FormGroup } from "@angular/forms";
import { SafeResourceUrl } from "@angular/platform-browser";
import { Observable } from 'rxjs';

export class News {
  newsId: string;
  headline: string;
  content: string;
  date: string;
  mediaLink: string;
  mediaType: string;
  sanitizedLink:SafeResourceUrl;
  imageLink:Observable<any>;

  constructor(newsId, headline, content, date, mediaLink, mediaType) {
    this.newsId = newsId;
    this.headline = headline;
    this.content = content;
    this.date = date;
    this.mediaLink = mediaLink;
    this.mediaType = mediaType;
  }

  static createByForm(createNewsForm: FormGroup) {
    return new News(
      createNewsForm.value.headline,
      createNewsForm.value.content,
      createNewsForm.value.date,
      createNewsForm.value.videoLink,
      createNewsForm.value.mediaLink,
      createNewsForm.value.mediaType
    );
  }
}
