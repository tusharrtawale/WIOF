import { Injectable } from '@angular/core';
import { Polls } from "../models/Polls";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { from } from "rxjs";
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

  saveSubscriber(polls: Polls) {
    // from is used to create an observable from promise
    return from(this.pollsCollection.add({ ...polls }));
  }
}
