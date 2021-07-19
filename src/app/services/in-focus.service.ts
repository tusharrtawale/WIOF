import { Injectable } from '@angular/core';
import { InFocus } from '../models/InFocus';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { map, concatMap } from 'rxjs/operators';
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

  getActiveInFocus(category: string): Observable<InFocus> | null {
    const inFocusCollectn = this.database.collection(
      FIREBASE_COLLECTION.IN_FOCUS,
      (ref) =>
        ref
          .where('category', '==', category)
          .where('status', '==', ITEM_STATUS.PUBLISHED)
          .limit(1)
    );
    return inFocusCollectn.get().pipe(
      map((querySnapshot) => {
        if (querySnapshot.docs.length > 0) {
          const data = querySnapshot.docs[0].data() as InFocus;
          data.inFocusId = querySnapshot.docs[0].id;
          data.sanitizedLink = this.sanitizer.bypassSecurityTrustResourceUrl(
            YOUTUBE_EMBED_VIDEO_LINK.replace('VIDEO_ID', data.videoLink)
          );
          return data;
        }
        return null;
      })
    );
  }

  publishInFocus(inFocusId: string, category: string) {
    return this.unpublishInFocus(category).pipe(
      concatMap(() => {
        return this.inFocusCollection.doc(inFocusId).update({
          status: ITEM_STATUS.PUBLISHED,
          publishDate: new Date().getTime(),
          unpublishDate: null
        });
      })
    );
  }

  unpublishInFocus(category: string) {
    return this.database
      .collection(FIREBASE_COLLECTION.IN_FOCUS, (ref) =>
        ref
          .where('category', '==', category)
          .where('status', '==', ITEM_STATUS.PUBLISHED)
      )
      .get()
      .pipe(
        map((querySnapshot) =>
          querySnapshot.docs.map((doc) => {
            const data = doc.data() as InFocus;
            data.inFocusId = doc.id;
            this.inFocusCollection.doc(data.inFocusId).update({
              status: ITEM_STATUS.INACTIVE,
              unpublishDate: new Date().getTime()
            });
            return data;
          })
        )
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
