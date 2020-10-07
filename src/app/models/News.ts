//Schema for the News

import { FormGroup } from "@angular/forms";

export class News {
  newsId: string;
  headline: string;
  content: string;
  date: string;
  mediaLink: string;
  mediaType: string;

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
