import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
// import { AngularFireStorage } from "@angular/fire/storage";
// import { DomSanitizer } from "@angular/platform-browser";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { FIREBASE_COLLECTION } from "../app.constants";
import { iNgoInFocus } from "../models/NgoInFocus";

@Injectable({
  providedIn: 'root'
})
export class NgoInFocusService {
  ngoInFocusCollection: AngularFirestoreCollection<any>;


  constructor(private database: AngularFirestore
    ) {
      this.ngoInFocusCollection = this.database.collection(
        FIREBASE_COLLECTION.NGO_IN_FOCUS
      );
     }

     
  saveNgoInFocus(ngoInFocus: iNgoInFocus) {
    let ngoInFocus$ = null;
    if (ngoInFocus.id !== null) {
      ngoInFocus$ = this.ngoInFocusCollection
        .doc(ngoInFocus.id)
        .update({ ...ngoInFocus });
    } else {
      ngoInFocus$ = this.ngoInFocusCollection.add({ ...ngoInFocus });
    }
    return from(ngoInFocus$);
  }

  getNgoInFocus(): Observable<iNgoInFocus[]> {
    return this.ngoInFocusCollection.get().pipe(
      map((querySnapshot) =>
        querySnapshot.docs.map((doc) => {
          const data = doc.data() as iNgoInFocus;
          data.id = doc.id;
          return data;
        })
      )
    );
  }

  deleteNgoInFocus(id: string) {
    return from(this.ngoInFocusCollection.doc(id).delete());
  }

  // setViewEditModeCoffeeConversation(coffeeConversation: CoffeeConversation) {
  //   this.viewEditModeCC = { ...coffeeConversation };
  // }

  // getViewEditModeCoffeeConversation() {
  //   return this.viewEditModeCC;
  // }

  // clearViewEditModeCoffeeConversation() {
  //   this.viewEditModeCC = null;
  // }

}
