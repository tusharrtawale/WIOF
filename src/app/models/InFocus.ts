import { SafeResourceUrl } from '@angular/platform-browser';
import { ITEM_STATUS } from '../app.constants';

export class InFocus {
  inFocusId: string;
  title: string;
  subTitle: string;
  description: string;
  category: string;
  videoLink: string;
  knowMoreLink: string;
  status: string;
  submitDate: number;
  publishDate: number;
  unpublishDate: number;
  sanitizedLink: SafeResourceUrl;

  constructor(
    inFocusId: string,
    title: string,
    subTitle: string,
    description: string,
    category: string,
    videoLink: string,
    knowMoreLink: string,
    status: string,
    submitDate: number
  ) {
    this.inFocusId = inFocusId;
    this.title = title;
    this.subTitle = subTitle;
    this.description = description;
    this.category = category;
    this.videoLink = videoLink;
    this.knowMoreLink = knowMoreLink;
    this.status = status;
    this.submitDate = submitDate;
  }
}
