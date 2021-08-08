import { Observable } from 'rxjs';
import { SafeResourceUrl } from '@angular/platform-browser';

export class NgoInFocus {
  id?: string;
  ngoName: string;
  description: string;
  image$: Observable<string>;
  ngoLogo: string;
  logoImage$: Observable<string>;
  mediaType: string;
  mediaLink: string;
  creationDate?: Date;
  creationId?: string;
  updateDate?: Date;
  updateId?: string;
  knowMoreLink: string;
  category: string;
  status: string;
  submitDate: number;
  publishDate: number;
  unpublishDate: number;
  sanitizedLink: SafeResourceUrl;

  constructor(
    id: string,
    ngoName: string,
    ngoLogo: string,
    mediaType: string,
    mediaLink: string,
    knowMoreLink: string,
    description: string,
    category: string,
    status: string,
    submitDate: number
  ) {
    this.id = id;
    this.ngoName = ngoName;
    this.ngoLogo = ngoLogo;
    this.mediaType = mediaType;
    this.mediaLink = mediaLink;
    this.knowMoreLink = knowMoreLink;
    this.description = description;
    this.category = category;
    this.status = status;
    this.submitDate = submitDate;
  }
}
