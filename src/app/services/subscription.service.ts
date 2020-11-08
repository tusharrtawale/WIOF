import { Injectable } from "@angular/core";
import { Subscriber } from "../models/Subscriber";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { from } from "rxjs";
import { FIREBASE_COLLECTION } from "../app.constants";

@Injectable({
  providedIn: "root"
})
export class SubscriptionService {
  subscriptionsCollection: AngularFirestoreCollection<any>;

  constructor(public database: AngularFirestore) {
    this.subscriptionsCollection = this.database.collection(
      FIREBASE_COLLECTION.SUBSCRIPTIONS
    );
  }

  saveSubscriber(subscriber: Subscriber) {
    // from create an observable from promise
    return from(this.subscriptionsCollection.add({ ...subscriber }));
  }
}
