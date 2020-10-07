import { Injectable } from "@angular/core";
import { News } from "../models/News";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { from, Observable } from "rxjs";
import { FIREBASE_COLLECTION } from "../app.constants";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  newsCollection: AngularFirestoreCollection<any>;

  constructor(public database: AngularFirestore) {
    this.newsCollection = this.database.collection(FIREBASE_COLLECTION.NEWS);
  }
  saveNews(news: News) {
    // from is used to create an observable from promise
    return from(this.newsCollection.add({ ...news }));
  }

  getAllNews(): Observable<News[]> {
    return this.newsCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as News;
          data.newsId = a.payload.doc.id;
          return data;
        })
      )
    );
  }
}
