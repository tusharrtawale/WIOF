import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { PollsService } from "../../services/polls.service";
import { Polls } from "../../models/Polls";
import { Poll } from "src/app/models/Poll";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-poll-result",
  templateUrl: "./poll-result.component.html",
  styleUrls: ["./poll-result.component.scss"],
})
export class PollResultComponent implements OnInit, OnDestroy {
  @Input() pollId: string;
  destroy$: Subject<boolean> = new Subject();
  optApercent = 0;
  optBpercent = 0;
  optCpercent = 0;
  optDpercent = 0;
  pollsArray: Polls[];
  pollObject: Poll = {} as Poll;

  optArray: number[] = [0, 0, 0, 0];
  optPercentageArray: number[] = [];
  total: number = 0;

  constructor(private pollsService: PollsService) {}

  ngOnInit() {
    this.countVotes();
  }

  ngOnChange() {
    this.countVotes();
  }

  countVotes() {
    //read all votes
    this.pollsService
      .getPolls(this.pollId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.pollsArray = data;
        this.pollObject = data[data.length - 1].poll;
        this.checkVote();
        this.optArray.forEach((x) => (this.total += x));
        this.optArray.forEach((x) => {
          const percent = (x / this.total) * 100;
          this.optPercentageArray.push(percent);
        });
        this.optApercent = this.optPercentageArray[0];
        this.optBpercent = this.optPercentageArray[1];
        this.optCpercent = this.optPercentageArray[2];
        this.optDpercent = this.optPercentageArray[3];
      });
  }

  checkVote() {
    this.pollsArray.forEach((x) => {
      if (x.option === "option 1") {
        this.optArray[0] += 1;
      } else if (x.option === "option 2") {
        this.optArray[1] += 1;
      } else if (x.option === "option 3") {
        this.optArray[2] += 1;
      } else if (x.option === "option 4") {
        this.optArray[3] += 1;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
