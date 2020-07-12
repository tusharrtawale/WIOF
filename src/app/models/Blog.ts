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
  category: String;
  subCategory: String;
  // List<Tag> tags;
  submitDate: Date;
  // Date approvalDate;
  publishDate: Date;

  constructor(
    title,
    authorName,
    category,
    subCategory,
    image,
    shortDescription,
    content
  ) {
    this.title = title;
    this.author = authorName;
    this.category = category;
    this.subCategory = subCategory;
    (this.imageName = image), (this.shortDescription = shortDescription);
    this.content = content;
  }

  static createByForm(addBlogForm: FormGroup) {
    return new Blog(
      addBlogForm.value.title,
      addBlogForm.value.authorName,
      addBlogForm.value.category,
      addBlogForm.value.subCategory,
      addBlogForm.value.image,
      addBlogForm.value.shortDescription,
      addBlogForm.value.content
    );
  }
}
