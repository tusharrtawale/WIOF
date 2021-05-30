import { Injectable } from "@angular/core";
import { InFocus } from "../models/InFocus";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { from, Observable } from "rxjs";
import {
  FIREBASE_COLLECTION,
  YOUTUBE_EMBED_VIDEO_LINK
} from "../app.constants";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
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

  getInFocuss(category?: string): Observable<InFocus[]> {
    let inFocusCollectn = this.database.collection(
      FIREBASE_COLLECTION.IN_FOCUS
    );
    if (category !== undefined) {
      inFocusCollectn = this.database.collection(
        FIREBASE_COLLECTION.IN_FOCUS,
        (ref) => ref.where("category", "==", category)
      );
    }
    return inFocusCollectn.get().pipe(
      map((querySnapshot) =>
        querySnapshot.docs.map((doc) => {
          const data = doc.data() as InFocus;
          data.inFocusId = doc.id;
          data.sanitizedLink = this.sanitizer.bypassSecurityTrustResourceUrl(
            YOUTUBE_EMBED_VIDEO_LINK.replace("VIDEO_ID", data.videoLink)
          );
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
