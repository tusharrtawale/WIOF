import { Injectable } from '@angular/core';
import { Subscriber } from '../models/Subscriber';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { from } from 'rxjs';
import { FIREBASE_COLLECTION } from '../app.constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  subscriptionsCollection: AngularFirestoreCollection<any>;

  constructor(public database: AngularFirestore) {
    this.subscriptionsCollection = this.database.collection(
      FIREBASE_COLLECTION.SUBSCRIPTIONS
    );
  }

  getSubscribers(): Observable<Subscriber[]> {
    return this.subscriptionsCollection.get().pipe(
      map((querySnapshot) =>
        querySnapshot.docs.map((doc) => {
          const data = doc.data() as Subscriber;
          data.id = doc.id;
          return data;
        })
      )
    );
  }

  saveSubscriber(subscriber: Subscriber) {
    // from create an observable from promise
    return from(this.subscriptionsCollection.add({ ...subscriber }));
  }
}
