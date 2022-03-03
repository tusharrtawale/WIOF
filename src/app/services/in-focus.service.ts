import { Injectable } from '@angular/core';
import { InFocus } from '../models/InFocus';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import {
  FIREBASE_COLLECTION,
  YOUTUBE_EMBED_VIDEO_LINK,
  ITEM_STATUS
} from '../app.constants';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class InFocusService {
  inFocusCollection: AngularFirestoreCollection<any>;
  viewEditModeInFocus: InFocus;

  constructor(
    private database: AngularFirestore,
    private sanitizer: DomSanitizer
  ) {
    this.inFocusCollection = this.database.collection(
      FIREBASE_COLLECTION.IN_FOCUS
    );
  }

  saveInFocus(inFocus: InFocus) {
    let inFocus$ = null;
    if (inFocus.inFocusId !== null) {
      inFocus$ = this.inFocusCollection
        .doc(inFocus.inFocusId)
        .update({ ...inFocus });
    } else {
      inFocus$ = this.inFocusCollection.add({ ...inFocus });
    }
    return from(inFocus$);
  }

  getInFocuses(category?: string): Observable<InFocus[]> {
    let inFocusCollectn = this.database.collection(
      FIREBASE_COLLECTION.IN_FOCUS
    );
    if (category !== undefined) {
      inFocusCollectn = this.database.collection(
        FIREBASE_COLLECTION.IN_FOCUS,
        (ref) => ref.where('category', '==', category)
      );
    }
    return inFocusCollectn.get().pipe(
      map((querySnapshot) =>
        querySnapshot.docs.map((doc) => {
          const data = doc.data() as InFocus;
          data.inFocusId = doc.id;
          data.sanitizedLink = this.sanitizer.bypassSecurityTrustResourceUrl(
            YOUTUBE_EMBED_VIDEO_LINK.replace('VIDEO_ID', data.videoLink)
          );
          return data;
        })
      )
    );
  }

  getActiveInFocuses(category: string): Observable<InFocus[]> {
    const inFocusCollectn = this.database.collection(
      FIREBASE_COLLECTION.IN_FOCUS,
      (ref) =>
        ref
          .where('category', '==', category)
          .where('status', '==', ITEM_STATUS.PUBLISHED)
          .orderBy('submitDate', 'desc')
    );
    return inFocusCollectn.get().pipe(
      map((querySnapshot) =>
        querySnapshot.docs.map((doc) => {
          const data = doc.data() as InFocus;
          data.inFocusId = doc.id;
          data.sanitizedLink = this.sanitizer.bypassSecurityTrustResourceUrl(
            YOUTUBE_EMBED_VIDEO_LINK.replace('VIDEO_ID', data.videoLink)
          );
          return data;
        })
      )
    );
  }

  publishInFocus(inFocusId: string) {
    return from(
      this.inFocusCollection.doc(inFocusId).update({
        status: ITEM_STATUS.PUBLISHED,
        publishDate: new Date().getTime(),
        unpublishDate: null
      })
    );
  }

  unpublishInFocus(id: string) {
    return from(
      this.database.collection(FIREBASE_COLLECTION.IN_FOCUS).doc(id).update({
        status: ITEM_STATUS.INACTIVE,
        unpublishDate: new Date().getTime()
      })
    );
  }

  deleteInFocus(inFocusId: string) {
    return from(this.inFocusCollection.doc(inFocusId).delete());
  }

  setViewEditModeInFocus(inFocus: InFocus) {
    this.viewEditModeInFocus = { ...inFocus };
  }

  getViewEditModeInFocus() {
    return this.viewEditModeInFocus;
  }

  clearViewEditModeInFocus() {
    this.viewEditModeInFocus = null;
  }
}
