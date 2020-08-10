import { Injectable } from '@angular/core';
import { Polls } from "../models/Polls";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { from, Observable } from "rxjs";
import { FIREBASE_COLLECTION } from "../app.constants";

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  pollsCollection: AngularFirestoreCollection<any>;

  constructor(public database: AngularFirestore) {
    this.pollsCollection = this.database.collection(
      // FIREBASE_COLLECTION.SUBSCRIPTIONS
      FIREBASE_COLLECTION.POLLS
    );
   }

  savePolls(polls: Polls) {
    // from is used to create an observable from promise
    return from(this.pollsCollection.add({ ...polls }));
  }

  getPolls(pollId:string): Observable<Polls[]>{
    const pollsCollectionById = this.database.collection(
      FIREBASE_COLLECTION.POLLS,
      (ref) => ref.where("poll.pollId", "==", pollId)
    );
    return pollsCollectionById.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Polls;
          data.id = a.payload.doc.id;
          return data;
        })
      )
    );
  }  
  

}
// ----------------------------------------
// import { Injectable } from "@angular/core";
// import {
//   AngularFirestore,
//   AngularFirestoreCollection,
// } from "@angular/fire/firestore";
// import { AngularFireStorage } from "@angular/fire/storage";
// import { from, Observable } from "rxjs";
// import { map } from "rxjs/operators";
// import { Blog } from "../models/Blog";
// import { FIREBASE_COLLECTION } from "../app.constants";

// @Injectable({
//   providedIn: "root",
// })
// export class BlogService {
//   blogCollection: AngularFirestoreCollection<any>;

  // constructor(
  //   private storage: AngularFireStorage,
  //   public database: AngularFirestore
  // ) {
  //   this.blogCollection = this.database.collection(FIREBASE_COLLECTION.BLOGS);
  // }

  // function to pull Images from firebase storage using image link stored in firestore in each blog
  // getImage(Image: String): Observable<String> {
  //   const ref = this.storage.ref(
  //     `/${FIREBASE_COLLECTION.BLOG_IMAGE_STORAGE}/${Image}`
  //   ); //creates reference to storage item using the link in parameter
  //   return ref.getDownloadURL(); //pulls the download URL which is an observable , handle accordingly
  // }

//   getBlogs(category: String): Observable<Blog[]> {
//     const blogCollectionByCategory = this.database.collection(
//       FIREBASE_COLLECTION.BLOGS,
//       (ref) => ref.where("category", "==", category)
//     );
//     return blogCollectionByCategory.snapshotChanges().pipe(
//       map((actions) =>
//         actions.map((a) => {
//           const data = a.payload.doc.data() as Blog;
//           data.id = a.payload.doc.id;
//           data.image = this.getImage(data.imageName); //datatype is observable, handle accordingly
//           return data;
//         })
//       )
//     );
//   }

//   getBlog(id: string): Observable<Blog> {
//     const blogDoc = this.database.doc<Blog>(
//       `${FIREBASE_COLLECTION.BLOGS}/${id}`
//     );
//     return blogDoc.snapshotChanges().pipe(
//       map((a) => {
//         if (a.payload.exists === false) {
//           return null;
//         } else {
//           var data = a.payload.data() as Blog;
//           data.id = a.payload.id;
//           data.image = this.getImage(data.imageName); //datatype is observable, handle accordingly
//           return data;
//         }
//       })
//     );
//   }

//   saveBlogImage(imageData: any, imageName: String) {
//     const imageUploadTask = this.storage.upload(
//       `/${FIREBASE_COLLECTION.BLOG_IMAGE_STORAGE}/${imageName}`,
//       imageData
//     );
//     return from(imageUploadTask);
//   }

//   saveBlog(blog: Blog) {
//     return from(this.blogCollection.add({ ...blog }));
//   }
// }
