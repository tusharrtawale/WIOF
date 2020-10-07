import { Component, OnInit, OnDestroy } from "@angular/core";
import { PollQuestion } from "src/app/models/PollQuestion";
import { PollService } from "src/app/services/poll.service";
import { Subject, Observable, throwError } from "rxjs";
import { takeUntil, catchError, map } from "rxjs/operators";
import { Poll } from "src/app/models/Poll";

@Component({
  selector: "app-manage-polls",
  templateUrl: "./manage-polls.page.html",
  styleUrls: ["./manage-polls.page.scss"],
})
export class ManagePollsPage implements OnInit, OnDestroy {
  pollsList: Array<PollQuestion> = [];
  destroy$: Subject<boolean> = new Subject();
  pollsList$: Observable<Poll[]>;

  constructor(private pollService: PollService) {}
  ngOnInit() {
    this.pollsList$ = this.pollService.getPoll().pipe(
      takeUntil(this.destroy$),
      map((pollsList) => {
        return pollsList;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
