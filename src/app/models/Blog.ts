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
    title,
    authorName,
    aboutAuthor,
    category,
    subCategory,
    image,
    shortDescription,
    content
  ) {
    this.title = title;
    this.author = authorName;
    this.aboutAuthor = aboutAuthor;
    this.category = category;
    this.subCategory = subCategory;
    (this.imageName = image), (this.shortDescription = shortDescription);
    this.content = content;
  }

  static formatImageName(imageName: string) {
    let newImageName = "";
    if (imageName) {
      const imgNameArr = imageName.split("\\");
      newImageName = "_" + imgNameArr[imgNameArr.length - 1];
    }
    return Date.now() + newImageName; // add timestamp to image name to keep it unique
  }

  static createByForm(addBlogForm: FormGroup) {
    return new Blog(
      addBlogForm.value.title,
      addBlogForm.value.authorName,
      addBlogForm.value.aboutAuthor,
      addBlogForm.value.category,
      addBlogForm.value.subCategory,
      this.formatImageName(addBlogForm.value.image),
      addBlogForm.value.shortDescription,
      addBlogForm.value.content
    );
  }
}
