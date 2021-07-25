import { Observable } from 'rxjs';

export class NgoInFocus {
  id?: string;
  ngoName: string;
  description: string;
  ngoImage: string;
  image$: Observable<string>;
  ngoLogo: string;
  logoImage$: Observable<string>;
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

  constructor(
    id: string,
    ngoName: string,
    ngoLogo: string,
    ngoImage: string,
    knowMoreLink: string,
    description: string,
    category: string,
    status: string,
    submitDate: number
  ) {
    this.id = id;
    this.ngoName = ngoName;
    this.ngoLogo = ngoLogo;
    this.ngoImage = ngoImage;
    this.knowMoreLink = knowMoreLink;
    this.description = description;
    this.category = category;
    this.status = status;
    this.submitDate = submitDate;
  }
}
