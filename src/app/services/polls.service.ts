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
export class PollsService {
  pollsCollection: AngularFirestoreCollection<any>;

  constructor(public database: AngularFirestore) {
    this.pollsCollection = this.database.collection(
      // FIREBASE_COLLECTION.SUBSCRIPTIONS
      FIREBASE_COLLECTION.POLLS
    );
  }

  savePolls(poll: Poll) {
    // from is used to create an observable from promise
    return from(this.pollsCollection.add({ ...poll }));
  }

  getPolls(pollQuestionId: string): Observable<Poll[]> {
    // getPolls(): Observable<Polls[]>{
    const pollsCollectionById = this.database.collection(
      FIREBASE_COLLECTION.POLLS,
      (ref) => ref.where("pollQuestionId", "==", pollQuestionId)
    );
    return pollsCollectionById.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Poll;
          data.id = a.payload.doc.id;
          return data;
        })
      )
    );
  }
}
