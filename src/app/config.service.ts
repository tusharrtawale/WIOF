import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { FIREBASE_COLLECTION } from "../app.constants";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  blogCollection: AngularFirestoreCollection<any>;

  constructor(
    public database: AngularFirestore
  ) {
    this.blogCollection = this.database.collection(FIREBASE_COLLECTION.BLOGS);
  }


  getBlogs(category: String): Observable<Blog[]> {
    const blogCollectionByCategory = this.database.collection(
      FIREBASE_COLLECTION.BLOGS,
      (ref) => ref.where("category", "==", category)
    );
    return blogCollectionByCategory.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return data;
        })
      )
    );
  }

  getBlog(id: string): Observable<Blog> {
    const blogDoc = this.database.doc<Blog>(
      `${FIREBASE_COLLECTION.BLOGS}/${id}`
    );
    return blogDoc.snapshotChanges().pipe(
      map((a) => {
        if (!a.payload.exists) {
          return null;
        } else {
          var data = a.payload.data() as Blog;
          data.id = a.payload.id;
          data.image = this.getImage(data.imageName); //datatype is observable, handle accordingly
          return data;
        }
      })
    );
  }

  saveBlogImage(imageData: any, imageName: String) {
    const imageUploadTask = this.storage.upload(
      `/${FIREBASE_COLLECTION.BLOG_IMAGE_STORAGE}/${imageName}`,
      imageData
    );
    return from(imageUploadTask);
  }

  saveBlog(blog: Blog) {
    return from(this.blogCollection.add({ ...blog }));
  }
}
