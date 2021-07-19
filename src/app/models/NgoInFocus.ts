export class NgoInFocus {
  id?: string;
  ngoName: string;
  description: string;
  ngoImage: string;
  ngoLogo: string;
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
    knowMoreLink: string,
    description: string,
    category: string,
    status: string,
    submitDate: number
  ) {
    this.id = id;
    this.ngoName = ngoName;
    this.knowMoreLink = knowMoreLink;
    this.description = description;
    this.category = category;
    this.status = status;
    this.submitDate = submitDate;
  }
}
