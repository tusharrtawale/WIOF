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
import { iCourseInFocus } from "../models/courseInFocus";

@Injectable({
  providedIn: 'root'
})
export class CourseInFocusService {
  courseInFocusCollection: AngularFirestoreCollection<any>;


  constructor(private database: AngularFirestore) {
    this.courseInFocusCollection = this.database.collection(
    FIREBASE_COLLECTION.COURSE_IN_FOCUS
  ); }

  saveCourseInFocus(courseInFocus: iCourseInFocus) {
    let courseInFocus$ = null;
    if (courseInFocus.id !== null) {
      courseInFocus$ = this.courseInFocusCollection
        .doc(courseInFocus.id)
        .update({ ...courseInFocus });
    } else {
      courseInFocus$ = this.courseInFocusCollection.add({ ...courseInFocus });
    }
    return from(courseInFocus$);
  }

  getCourseInFocus(): Observable<iCourseInFocus[]> {
    return this.courseInFocusCollection.get().pipe(
      map((querySnapshot) =>
        querySnapshot.docs.map((doc) => {
          const data = doc.data() as iCourseInFocus;
          data.id = doc.id;
          return data;
        })
      )
    );
  }

  deleteCourseInFocus(id: string) {
    return from(this.courseInFocusCollection.doc(id).delete());
  }
}
