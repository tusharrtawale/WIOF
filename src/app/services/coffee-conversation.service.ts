import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { FIREBASE_COLLECTION } from "../app.constants";
import { CoffeeConversation } from "../models/CoffeeConversation";

export class CoffeeConversationService {
  ccCollection: AngularFirestoreCollection<any>;
  viewEditModeCC: CoffeeConversation;

  constructor(
    private storage: AngularFireStorage,
    private database: AngularFirestore
  ) {
    this.ccCollection = this.database.collection(
      FIREBASE_COLLECTION.COFFEE_CONVERSATIONS
    );
  }

  saveCoffeeConversation(coffeeConversation: CoffeeConversation) {
    let coffeeConversation$ = null;
    if (coffeeConversation.ccId !== null) {
      coffeeConversation$ = this.ccCollection
        .doc(coffeeConversation.ccId)
        .update({ ...coffeeConversation });
    } else {
      coffeeConversation$ = this.ccCollection.add({ ...coffeeConversation });
    }
    return from(coffeeConversation$);
  }

  getAllCoffeeConversations(): Observable<CoffeeConversation[]> {
    return this.ccCollection.get().pipe(
      map((querySnapshot) =>
        querySnapshot.docs.map((doc) => {
          const data = doc.data() as CoffeeConversation;
          data.ccId = doc.id;
          return data;
        })
      )
    );
  }

  deleteCoffeeConversation(ccId: string) {
    return from(this.ccCollection.doc(ccId).delete());
  }

  setViewEditModeCoffeeConversation(coffeeConversation: CoffeeConversation) {
    this.viewEditModeCC = { ...coffeeConversation };
  }

  getViewEditModeCoffeeConversation() {
    return this.viewEditModeCC;
  }

  clearViewEditModeCoffeeConversation() {
    this.viewEditModeCC = null;
  }
}
