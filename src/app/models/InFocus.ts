import { SafeResourceUrl } from "@angular/platform-browser";

export class InFocus {
  inFocusId: string;
  title: string;
  subTitle: string;
  description: string;
  category: string;
  videoLink: string;
  knowMoreLink: string;
  sanitizedLink: SafeResourceUrl;

  constructor(
    inFocusId: string,
    title: string,
    subTitle: string,
    description: string,
    category: string,
    videoLink: string,
    knowMoreLink: string
  ) {
    this.inFocusId = inFocusId;
    this.title = title;
    this.subTitle = subTitle;
    this.description = description;
    this.category = category;
    this.videoLink = videoLink;
    this.knowMoreLink = knowMoreLink;
  }
}
