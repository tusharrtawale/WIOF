import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  QuerySnapshot,
  DocumentData,
  DocumentChangeAction,
} from "@angular/fire/firestore";
import { map, switchMap, catchError, concatMap } from "rxjs/operators";
import { from, Observable, of, throwError } from "rxjs";
import { FIREBASE_COLLECTION, POLL_STATUS } from "../app.constants";
import { PollQuestion } from "../models/PollQuestion";

@Injectable({
  providedIn: "root",
})
export class PollQuestionService {
  pollCollection: AngularFirestoreCollection<any>;

  constructor(public database: AngularFirestore) {
    this.pollCollection = this.database.collection(
      // FIREBASE_COLLECTION.SUBSCRIPTIONS
      FIREBASE_COLLECTION.POLL
    );
  }

  savePollQuestion(poll: PollQuestion) {
    return from(this.pollCollection.add({ ...poll }));
  }

  getPollQuestion(): Observable<PollQuestion[]> {
    const pollCollectionById = this.database.collection(
      FIREBASE_COLLECTION.POLL,
      (ref) => ref.where("status", "==", POLL_STATUS.PUBLISHED)
    );
    return pollCollectionById.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as PollQuestion;
          data.pollId = a.payload.doc.id;
          return data;
        })
      )
    );
  }

  getPollQuestions(): Observable<PollQuestion[]> {
    const pollCollectionById = this.database.collection(
      FIREBASE_COLLECTION.POLL
    );
    return pollCollectionById.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as PollQuestion;
          data.pollId = a.payload.doc.id;
          return data;
        })
      )
    );
  }

  deletePollQuestion(pollQuestionId: string) {
    return from(this.pollCollection.doc(pollQuestionId).delete());
  }

  publishPollQuestion(pollQuestionId: string) {
    return this.inactivatePollQuestions().pipe(
      concatMap(() => {
        return this.pollCollection.doc(pollQuestionId).update({
          status: POLL_STATUS.PUBLISHED,
          publishStartDate: new Date().getTime(),
        });
      })
    );
  }

  inactivatePollQuestions() {
    return this.database
      .collection(FIREBASE_COLLECTION.POLL, (ref) =>
        ref.where("status", "==", POLL_STATUS.PUBLISHED)
      )
      .get()
      .pipe(
        map((querySnapshot) =>
          querySnapshot.docs.map((doc) => {
            const data = doc.data() as PollQuestion;
            data.pollId = doc.id;
            this.pollCollection.doc(data.pollId).update({
              status: POLL_STATUS.INACTIVE,
              publishEndDate: new Date().getTime(),
            });
            return data;
          })
        )
      );
  }
}
