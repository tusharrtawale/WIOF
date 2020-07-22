import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Blog } from "../models/Blog";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  blogCollection: AngularFirestoreCollection<any>;
  blogCollectionByCategory: AngularFirestoreCollection<any>;
  blogDoc: AngularFirestoreDocument<any>;
  blogs: Observable<Blog[]>;
  blog: Observable<Blog>;

  imagesURL: Observable<String>[];
  // Delete Commented code once it runs
  // private API_BASE_URL = "http://localhost:8080";

  constructor(
    private http: HttpClient,
    private storage: AngularFireStorage,
    public database: AngularFirestore
  ) {
    this.blogCollection = this.database.collection("Blogs");
  }

  // public getBlogs() {
  //   return this.http.get(this.API_BASE_URL + "/blogs");
  // }

  // public getBlog(blogId: String): Observable<Blog> {
  //   return this.http
  //     .get(`${this.API_BASE_URL}/blog/${blogId}`)
  //     .pipe(map((blog) => blog as Blog));
  // }

  //Function to pull Images from firebase storage using image link stored in firestore in each blog

  getImage(Image: String): Observable<String> {
    // console.log("strg img fn arrived") //test

    const ref = this.storage.ref(`/blog-images/${Image}`); //creates reference to storage item using the link in parameter
    // console.log("image: ",`/blog-images/${Image}`) //test

    return ref.getDownloadURL(); //pulls the download URL which is an observable , handle accordingly
  }

  getBlogs(category: String): Observable<Blog[]> {
    // console.log("came here") //test
    this.blogCollectionByCategory = this.database.collection("Blogs", (ref) =>
      ref.where("category", "==", category)
    );
    this.blogs = this.blogCollectionByCategory.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Blog;
          data.id = a.payload.doc.id;
          // console.log("data1",data);       //Test
          data.image = this.getImage(data.imageName); //datatype is observable, handle accordingly
          // console.log("imagesArray:",data.imagesArray)
          //test
          // console.log("thumbnail:",data.thumbnail)  //test
          return data;
        })
      )
    );
    // console.log("Blogs",this.blogs)  //test
    return this.blogs;
  }

  getBlog(id: string): Observable<Blog> {
    this.blogDoc = this.database.doc<Blog>(`Blogs/${id}`);
    this.blog = this.blogDoc.snapshotChanges().pipe(
      map((a) => {
        if (a.payload.exists === false) {
          return null;
        } else {
          var data = a.payload.data() as Blog;
          data.id = a.payload.id;
          // console.log("data",data);
          data.image = this.getImage(data.imageName); //datatype is observable, handle accordingly

          return data;
        }
      })
    );
    // console.log("client",this.client)
    return this.blog;
  }

  saveBlogImage(imageData: any, imageName: String) {
    const imageUploadTask = this.storage.upload(
      `/blog-images/${imageName}`,
      imageData
    );
    // from create an observable from promise
    return from(imageUploadTask);
  }

  saveBlog(blog: Blog) {
    // from create an observable from promise
    return from(this.blogCollection.add({ ...blog }));
  }
}
