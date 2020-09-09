import { Injectable } from '@angular/core';

import { EnvDay } from "../models/env-cal-data";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { map } from "rxjs/operators";
import { from, Observable } from "rxjs";
import { FIREBASE_COLLECTION } from "../app.constants";

@Injectable({
  providedIn: 'root'
})
export class EnvcalServiceService {
  envcalCollectionByMonth: AngularFirestoreCollection<any>;
  
  constructor(private storage: AngularFireStorage,
    public database: AngularFirestore) { }

  getEnvCal(month: string): Observable<EnvDay[]> {
    // getPolls(): Observable<Polls[]>{
    this.envcalCollectionByMonth = this.database.collection(
      FIREBASE_COLLECTION.ENVCAL,
      (ref) => ref.where("month", "==", month)
    );
    return this.envcalCollectionByMonth.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as EnvDay;
          data.id = a.payload.doc.id;
          return data;
        })
      )
    );
  }

  getImage(Image: String): Observable<String> {
    const ref = this.storage.ref(
      `/${FIREBASE_COLLECTION.ENVCAL_IMAGE_STORAGE}/${Image}`
    ); //creates reference to storage item using the link in parameter
    return ref.getDownloadURL(); //pulls the download URL which is an observable , handle accordingly
  }

  //to-do link images to each envday obj


}
