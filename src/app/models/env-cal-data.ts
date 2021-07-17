import { Observable } from 'rxjs';

export class EnvDay {
  id: string;
  month: number;
  day: string;
  occasion: string;
  imageName: string;
  image: Observable<String>;
  description: string;
  showMoreLink: string;
  category: string;

  constructor(id, day, month, occasion, imageName, description, showMoreLink) {
    this.id = id;
    this.day = day;
    this.month = month;
    this.occasion = occasion;
    this.imageName = imageName;
    this.description = description;
    this.showMoreLink = showMoreLink;
  }
}
