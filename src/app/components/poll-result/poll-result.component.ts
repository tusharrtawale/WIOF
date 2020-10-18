import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { PollsService } from "../../services/polls.service";
import { Poll } from "../../models/Poll";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { PollQuestion } from "src/app/models/PollQuestion";

@Component({
  selector: "app-poll-result",
  templateUrl: "./poll-result.component.html",
  styleUrls: ["./poll-result.component.scss"],
})
export class PollResultComponent implements OnInit, OnDestroy {
  @Input() pollQuestion: PollQuestion;
  destroy$: Subject<boolean> = new Subject();
  optionData = {};

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
      .getPolls(this.pollQuestion.pollId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.calculatePollResult(this.pollQuestion, data, this.optionData);
      });
  }

  calculatePollResult(pollQuestion, pollsArray, optionData) {
    pollQuestion.options.forEach((option, index) => {
      optionData["option" + (index + 1)] = {
        option,
        votes: 0,
        percent: 0,
      };
    });

    let totalVotes = 0;
    pollsArray.forEach((x, index) => {
      totalVotes++;
      optionData[x.option].votes += 1;
    });

    Object.keys(optionData).forEach((x) => {
      optionData[x].percent = (optionData[x].votes / totalVotes) * 100;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
