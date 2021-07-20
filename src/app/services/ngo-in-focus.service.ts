import { Injectable } from '@angular/core';
import { NgoInFocus } from '../models/NgoInFocus';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { map, concatMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { FIREBASE_COLLECTION, ITEM_STATUS } from '../app.constants';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class NgoInFocusService {
  ngoInFocusCollection: AngularFirestoreCollection<any>;
  viewEditModeNgoInFocus: NgoInFocus;

  constructor(
    private database: AngularFirestore,
    private sanitizer: DomSanitizer
  ) {
    this.ngoInFocusCollection = this.database.collection(
      FIREBASE_COLLECTION.NGO_IN_FOCUS
    );
  }

  saveNgoInFocus(ngoInFocus: NgoInFocus) {
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

  getNgosInFocus(category?: string): Observable<NgoInFocus[]> {
    let ngoInFocusCollectn = this.database.collection(
      FIREBASE_COLLECTION.NGO_IN_FOCUS
    );
    if (category !== undefined) {
      ngoInFocusCollectn = this.database.collection(
        FIREBASE_COLLECTION.NGO_IN_FOCUS,
        (ref) => ref.where('category', '==', category)
      );
    }
    return ngoInFocusCollectn.get().pipe(
      map((querySnapshot) =>
        querySnapshot.docs.map((doc) => {
          const data = doc.data() as NgoInFocus;
          data.id = doc.id;
          return data;
        })
      )
    );
  }

  getActiveNgoInFocus(): Observable<NgoInFocus> | null {
    const ngoInFocusCollectn = this.database.collection(
      FIREBASE_COLLECTION.NGO_IN_FOCUS,
      (ref) => ref.where('status', '==', ITEM_STATUS.PUBLISHED).limit(1)
    );
    return ngoInFocusCollectn.get().pipe(
      map((querySnapshot) => {
        if (querySnapshot.docs.length > 0) {
          const data = querySnapshot.docs[0].data() as NgoInFocus;
          data.id = querySnapshot.docs[0].id;
          return data;
        }
        return null;
      })
    );
  }

  publishNgoInFocus(ngoInFocusId: string, category: string) {
    return this.unpublishNgoInFocus(category).pipe(
      concatMap(() => {
        return this.ngoInFocusCollection.doc(ngoInFocusId).update({
          status: ITEM_STATUS.PUBLISHED,
          publishDate: new Date().getTime(),
          unpublishDate: null
        });
      })
    );
  }

  unpublishNgoInFocus(id: string) {
    return this.database
      .collection(FIREBASE_COLLECTION.NGO_IN_FOCUS, (ref) =>
        ref.where('status', '==', ITEM_STATUS.PUBLISHED)
      )
      .get()
      .pipe(
        map((querySnapshot) =>
          querySnapshot.docs.map((doc) => {
            const data = doc.data() as NgoInFocus;
            data.id = doc.id;
            this.ngoInFocusCollection.doc(data.id).update({
              status: ITEM_STATUS.INACTIVE,
              unpublishDate: new Date().getTime()
            });
            return data;
          })
        )
      );
  }

  deleteNgoInFocus(ngoInFocusId: string) {
    return from(this.ngoInFocusCollection.doc(ngoInFocusId).delete());
  }

  setViewEditModeNgoInFocus(ngoInFocus: NgoInFocus) {
    this.viewEditModeNgoInFocus = { ...ngoInFocus };
  }

  getViewEditModeNgoInFocus() {
    return this.viewEditModeNgoInFocus;
  }

  clearViewEditModeNgoInFocus() {
    this.viewEditModeNgoInFocus = null;
  }
}
