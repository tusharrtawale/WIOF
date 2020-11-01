import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

export class Blog {
  id: String;
  title: String;
  shortDescription: String;
  content: String;
  imageName: String;
  image: Observable<String>;
  externalUrl: String;
  author: String;
  aboutAuthor: String;
  category: String;
  subCategory: String;
  // List<Tag> tags;
  submitDate: Date;
  // Date approvalDate;
  publishDate: Date;

  constructor(
    id,
    title,
    authorName,
    aboutAuthor,
    category,
    subCategory,
    image,
    shortDescription,
    content
  ) {
    this.id = id;
    this.title = title;
    this.author = authorName;
    this.aboutAuthor = aboutAuthor;
    this.category = category;
    this.subCategory = subCategory;
    (this.imageName = image), (this.shortDescription = shortDescription);
    this.content = content;
  }
}
