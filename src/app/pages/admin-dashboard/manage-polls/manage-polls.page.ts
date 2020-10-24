import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, throwError } from "rxjs";
import { catchError, map, takeUntil } from "rxjs/operators";
import { PollQuestion } from "src/app/models/PollQuestion";
import { PollQuestionService } from "src/app/services/poll-question.service";
import { UiUtilService } from "src/app/util/UiUtilService";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-manage-polls",
  templateUrl: "./manage-polls.page.html",
  styleUrls: ["./manage-polls.page.scss"],
})
export class ManagePollsPage implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  pollQuestionList$: Observable<PollQuestion[]>;

  constructor(
    private pollQuestionService: PollQuestionService,
    private uiUtil: UiUtilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.pollQuestionList$ = this.pollQuestionService.getPollQuestions().pipe(
      takeUntil(this.destroy$),
      map((pollQuestionList) => {
        return pollQuestionList.sort((a, b) => b.submitDate - a.submitDate);
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

  public async deletePollQuestion(
    pollQuestionList: PollQuestion[],
    index: number,
    pollQuestionId: string
  ) {
    const loader = await this.uiUtil.showLoader(
      "We are deleting the poll question..."
    );
    this.pollQuestionService.deletePollQuestion(pollQuestionId).subscribe(
      //TODO handle delete error case
      (response) => {
        console.log(response);
        loader.dismiss();
        this.uiUtil.presentAlert(
          "Success",
          "Poll question successfully deleted!",
          ["OK"]
        );
        pollQuestionList.splice(index, 1);
      },
      (error) => {
        console.log(error);
        loader.dismiss();
        this.uiUtil.presentAlert(
          "Error",
          "Uh Oh! We could not delete poll question. Please try again.",
          ["OK"]
        );
      }
    );
  }

  publishPollQuestion(pollQuestionId: string) {
    this.pollQuestionService
      .publishPollQuestion(pollQuestionId)
      .subscribe((data) => {
        console.log(data);
        this.uiUtil.presentAlert(
          "Success",
          "Poll question successfully published!",
          ["OK"]
        );
      });
  }

  viewPollDetails(pollQuestion: PollQuestion) {
    this.pollQuestionService.setViewEditModePollQuestion(pollQuestion);
    this.router.navigate(["poll", "edit"], {
      relativeTo: this.route,
      queryParams: { id: pollQuestion.pollId },
    });
  }

  addNewPoll() {
    this.router.navigate(["poll", "new"], { relativeTo: this.route });
  }
}
