export class CourseInFocus {
  id?: string;
  courseName: string;
  description: string;
  courseImage: string;
  courseLink: string;
  creationDate?: Date;
  creationId?: string;
  updateDate?: Date;
  updateId?: string;
  category: string;
  status: string;
  submitDate: number;
  publishDate: number;
  unpublishDate: number;

  constructor(
    id: string,
    courseName: string,
    courseLink: string,
    description: string,
    category: string,
    status: string,
    submitDate: number
  ) {
    this.id = id;
    this.courseName = courseName;
    this.courseLink = courseLink;
    this.description = description;
    this.category = category;
    this.status = status;
    this.submitDate = submitDate;
  }
}
