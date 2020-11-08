import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { FIREBASE_COLLECTION } from "./app.constants";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  congifCollection: AngularFirestoreCollection<any>;

  constructor(public database: AngularFirestore) {
    this.congifCollection = this.database.collection(
      FIREBASE_COLLECTION.CONFIG
    );
  }

  getConfig(file: string): Observable<any> {
    const configCollectionByCategory = this.database.collection(
      FIREBASE_COLLECTION.CONFIG,
      (ref) => ref.where("file", "==", file)
    );
    return configCollectionByCategory.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data();
          // data.id = a.payload.doc.id;
          return data;
        })
      )
    );
  }
}
