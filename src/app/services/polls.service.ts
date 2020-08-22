import { Injectable } from "@angular/core";
import { Polls } from "../models/Polls";
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

  savePolls(polls: Polls) {
    // from is used to create an observable from promise
    return from(this.pollsCollection.add({ ...polls }));
  }

  getPolls(pollId: string): Observable<Polls[]> {
    // getPolls(): Observable<Polls[]>{
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
