import { Injectable } from "@angular/core";
import { News } from "../models/News";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { map } from "rxjs/operators";
import { from, Observable } from "rxjs";
import { FIREBASE_COLLECTION } from "../app.constants";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  newsCollection: AngularFirestoreCollection<any>;

  constructor(
    private storage: AngularFireStorage,
    public database: AngularFirestore
  ) {
    this.newsCollection = this.database.collection(FIREBASE_COLLECTION.NEWS);
  }
  saveNews(news: News) {
    // from is used to create an observable from promise
    return from(this.newsCollection.add({ ...news }));
  }

  getImage(Image: String): Observable<String> {
    const ref = this.storage.ref(
      `/${FIREBASE_COLLECTION.NEWS_IMAGE_STORAGE}/${Image}`
    ); //creates reference to storage item using the link in parameter
    return ref.getDownloadURL(); //pulls the download URL which is an observable , handle accordingly
  }

  getAllNews(): Observable<News[]> {
    return this.newsCollection.get().pipe(
      map((querySnapshot) =>
        querySnapshot.docs.map((doc) => {
          const data = doc.data() as News;
          data.newsId = doc.id;
          if (data.mediaType == "image") {
            data.imageLink = this.getImage(data.mediaLink);
          }
          return data;
        })
      )
    );
  }
}
