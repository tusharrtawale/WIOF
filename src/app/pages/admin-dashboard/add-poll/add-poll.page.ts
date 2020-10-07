import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { UiUtilService } from "src/app/util/UiUtilService";
import { Poll } from "src/app/models/Poll";
import { PollService } from "src/app/services/poll.service";
import { Subject, throwError } from "rxjs";
import { takeUntil, map, catchError } from "rxjs/operators";
import { PollQuestion } from "src/app/models/PollQuestion";

@Component({
  selector: "app-add-poll",
  templateUrl: "./add-poll.page.html",
  styleUrls: ["./add-poll.page.scss"],
})
export class AddPollPage implements OnInit {
  addPollForm: FormGroup;
  loader;
  destroy$: Subject<boolean> = new Subject();

  constructor(
    private uiUtil: UiUtilService,
    private pollService: PollService
  ) {}

  ngOnInit() {
    this.addPollForm = this.initForm();
  }

  initForm() {
    return new FormGroup({
      question: new FormControl("", Validators.required),
      options: new FormArray([
        new FormControl("", Validators.required),
        new FormControl("", Validators.required),
        new FormControl("", Validators.required),
        new FormControl("", Validators.required),
      ]),
      releaseDate: new FormControl(),
      expiryDate: new FormControl(),
    });
  }

  getOptionControls() {
    return (this.addPollForm.get("options") as FormArray).controls;
  }

  async onSubmit() {
    if (this.addPollForm.valid) {
      console.log(this.addPollForm.value);
      const pollQuestion = PollQuestion.createByForm(this.addPollForm);
      //TODO update poll object model
      const poll = new Poll(
        null,
        pollQuestion.question,
        pollQuestion.options[0],
        pollQuestion.options[1],
        pollQuestion.options[2],
        pollQuestion.options[3],
        "Active"
      );
      this.loader = await this.uiUtil.showLoader(
        "We are saving your poll question..."
      );
      this.pollService
        .savePoll(poll)
        .pipe(
          takeUntil(this.destroy$),
          map((response) => {
            return response;
          }),
          catchError((err) => {
            return throwError(err);
          })
        )
        .subscribe(
          (response) => {
            this.loader.dismiss();
            this.addPollForm.reset();
            this.uiUtil.presentAlert(
              "Success",
              "We saved your poll question!",
              ["Cool!"]
            );
          },
          (error) => {
            console.log(error);
            this.loader.dismiss();
            this.uiUtil.presentAlert(
              "Error",
              "Uh oh! We could not save it. Please try again.",
              ["OK"]
            );
          }
        );
    }
  }

  removeOption(index: number) {
    this.getOptionControls().splice(index, 1);
  }

  addOption() {
    this.getOptionControls().push(new FormControl("", Validators.required));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
