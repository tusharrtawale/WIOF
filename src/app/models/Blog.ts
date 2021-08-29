import { Observable } from 'rxjs';

export class Blog {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  imageName: string;
  image$: Observable<string>;
  externalUrl: string;
  author: string;
  aboutAuthor: string;
  category: string;
  subCategory: string;
  timeToRead: number;
  submitDate: Date;
  publishDate: Date;

  constructor(
    id: string,
    title: string,
    authorName: string,
    aboutAuthor: string,
    category: string,
    subCategory: string,
    imageName: string,
    shortDescription: string,
    content: string
  ) {
    this.id = id;
    this.title = title;
    this.author = authorName;
    this.aboutAuthor = aboutAuthor;
    this.category = category;
    this.subCategory = subCategory;
    this.imageName = imageName;
    this.shortDescription = shortDescription;
    this.content = content;
  }
}
