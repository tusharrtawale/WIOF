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
  category: String;
  subCategory: String;
  // List<Tag> tags;
  // Date submitDate;
  publishDate: Date;
  // Date approvalDate;
  // Date publishDate;
}
