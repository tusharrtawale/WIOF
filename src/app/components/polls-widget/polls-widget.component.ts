import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { combineLatest, Subject, throwError } from "rxjs";
import { catchError, map, takeUntil } from "rxjs/operators";
import { PollQuestion } from "src/app/models/PollQuestion";
import { UiUtilService } from "src/app/util/UiUtilService";
import { IpService } from "../../services/ip.service";
import { PollQuestionService } from "../../services/poll-question.service";
import { PollsService } from "../../services/polls.service";
import { Poll } from "src/app/models/Poll";

@Component({
  selector: "app-polls-widget",
  templateUrl: "./polls-widget.component.html",
  styleUrls: ["./polls-widget.component.scss"],
})
export class PollsWidgetComponent implements OnInit, OnDestroy {
  pollQuestion: PollQuestion;
  IP4: any = { ip: "" };
  IP6: any = { ip: "" };
  showPollResult: boolean = false;
  showForm: boolean = true;
  errorShow: boolean = false;
  loader;
  destroy$: Subject<boolean> = new Subject();

  wiofPollsForm: FormGroup;
  constructor(
    private pollsService: PollsService,
    private pollQuestionService: PollQuestionService,
    private ip: IpService,
    private uiUtil: UiUtilService
  ) {}

  ngOnInit() {
    this.wiofPollsForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      option: new FormControl("", [Validators.required]),
    });

    this.pollQuestion = {} as PollQuestion;
    combineLatest([
      //TODO IP handling pending
      // this.ip.getIp4(),
      // this.ip.getIp6(),
      this.pollQuestionService.getPollQuestion(),
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        ([pollData]) => {
          //TODO IP handling pending
          // this.IP4 = ip4Data;
          // this.IP6 = ip6Data;
          this.pollQuestion = pollData[0];
        },
        (err) => {
          console.log(err);
        }
      );
  }

  async submit() {
    if (this.wiofPollsForm.valid) {
      const poll = Poll.createByForm(
        this.pollQuestion.pollId,
        this.wiofPollsForm,
        this.IP4.ip,
        this.IP6.ip
      );
      this.loader = await this.uiUtil.showLoader("Saving your vote...");
      this.pollsService
        .savePolls(poll)
        .pipe(
          takeUntil(this.destroy$),
          map((pollsRes) => {
            return pollsRes;
          }),
          catchError((err) => {
            return throwError(err);
          })
        )
        .subscribe(
          (subscribeRes) => {
            this.loader.dismiss();
            this.uiUtil.presentAlert(
              "Vote Recorded",
              `Your vote has been recorded. Thanks ${
                this.wiofPollsForm.get("name").value
              } for voting..!!`,
              ["Okay"]
            );
            this.wiofPollsForm.reset();
            this.showPollResult = true;
            this.showForm = false;
          },
          (error) => {
            this.loader.dismiss();
            this.uiUtil.presentAlert(
              "Error",
              "Uh oh! We could not save it. Please try again.",
              ["OK"]
            );
            console.log(error);
          }
        );
    } else {
      this.showError();
    }
  }

  showError() {
    this.errorShow = true;
    setTimeout(() => (this.errorShow = false), 2000);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
