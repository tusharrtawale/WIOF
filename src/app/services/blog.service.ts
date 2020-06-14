import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Blog } from "../models/Blog";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  private API_BASE_URL = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  public getBlogs() {
    return this.http.get(this.API_BASE_URL + "/blogs");
  }

  public getBlog(blogId: String): Observable<Blog> {
    return this.http
      .get(`${this.API_BASE_URL}/blog/${blogId}`)
      .pipe(map((blog) => blog as Blog));
  }
}
