import { Injectable } from "@angular/core";
import { Poll } from "../models/Poll";
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
export class PollService {
  pollCollection: AngularFirestoreCollection<any>;

  constructor(public database: AngularFirestore) {
    this.pollCollection = this.database.collection(
      // FIREBASE_COLLECTION.SUBSCRIPTIONS
      FIREBASE_COLLECTION.POLL
    );
  }
  //To be used in Dashboard

  savePoll(poll: Poll) {
    // from is used to create an observable from promise
    return from(this.pollCollection.add({ ...poll }));
  }

  getPoll(): Observable<Poll[]> {
    const pollCollectionById = this.database.collection(
      FIREBASE_COLLECTION.POLL,
      (ref) => ref.where("status", "==", "published")
    );
    return pollCollectionById.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Poll;
          data.pollId = a.payload.doc.id;
          return data;
        })
      )
    );
  }
}
