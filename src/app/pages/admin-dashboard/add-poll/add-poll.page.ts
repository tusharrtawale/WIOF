import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { UiUtilService } from "src/app/util/UiUtilService";
import { PollQuestionService } from "src/app/services/poll-question.service";
import { Subject, throwError } from "rxjs";
import { takeUntil, map, catchError } from "rxjs/operators";
import { PollQuestion } from "src/app/models/PollQuestion";
import { ActivatedRoute } from "@angular/router";
import { POLL_STATUS } from "src/app/app.constants";

@Component({
  selector: "app-add-poll",
  templateUrl: "./add-poll.page.html",
  styleUrls: ["./add-poll.page.scss"],
})
export class AddPollPage implements OnInit {
  addPollForm: FormGroup;
  loader;
  destroy$: Subject<boolean> = new Subject();
  minDate: string;
  isEditMode: boolean = false;
  pollQuestion: PollQuestion;

  constructor(
    private uiUtil: UiUtilService,
    private pollQuestionService: PollQuestionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      this.pollQuestion = this.pollQuestionService.getViewEditModePollQuestion();
      if (
        param.has("mode") &&
        param.get("mode") === "edit" &&
        this.pollQuestion
      ) {
        this.isEditMode = true;
        this.addPollForm = this.initFormByPollQuestion(this.pollQuestion);
      } else {
        this.isEditMode = false;
        this.addPollForm = this.initForm();
      }
    });
  }

  private initForm() {
    let publishStartDate = new Date();
    let publishEndDate = new Date();
    publishEndDate.setDate(publishStartDate.getDate() + 7);

    return new FormGroup({
      question: new FormControl("", Validators.required),
      options: new FormArray([
        new FormControl("", Validators.required),
        new FormControl("", Validators.required),
        new FormControl("", Validators.required),
        new FormControl("", Validators.required),
      ]),
      publishStartDate: new FormControl(publishStartDate, Validators.required),
      publishEndDate: new FormControl(publishEndDate, Validators.required),
    });
  }

  private initFormByPollQuestion(pollQuestion: PollQuestion) {
    const optionControls = pollQuestion.options.map(
      (option) => new FormControl(option, Validators.required)
    );
    this.addPollForm = new FormGroup({
      question: new FormControl(pollQuestion.question, Validators.required),
      options: new FormArray(optionControls),
      publishStartDate: new FormControl(
        new Date(pollQuestion.publishStartDate),
        Validators.required
      ),
      publishEndDate: new FormControl(
        new Date(pollQuestion.publishEndDate),
        Validators.required
      ),
    });
    return this.addPollForm;
  }

  getOptionControls() {
    return this.addPollForm.get("options") as FormArray;
  }

  async onSubmit() {
    if (this.addPollForm.valid) {
      console.log(this.addPollForm.value);
      this.pollQuestion = this.createByForm(
        this.addPollForm,
        this.pollQuestion,
        this.isEditMode
      );
      this.loader = await this.uiUtil.showLoader(
        "We are saving your poll question..."
      );

      this.pollQuestionService
        .savePollQuestion(this.pollQuestion)
        .pipe(
          takeUntil(this.destroy$),
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

  private createByForm(
    addPollForm: FormGroup,
    pollQuestion: PollQuestion,
    isEditMode: boolean
  ) {
    return new PollQuestion(
      isEditMode ? pollQuestion.pollId : undefined,
      addPollForm.value.question,
      addPollForm.value.options,
      new Date(addPollForm.value.publishStartDate).getTime(),
      new Date(addPollForm.value.publishEndDate).getTime(),
      isEditMode ? pollQuestion.submitDate : new Date().getTime(),
      isEditMode ? pollQuestion.status : POLL_STATUS.SUBMITTED
    );
  }

  removeOption(index: number) {
    this.getOptionControls().removeAt(index);
  }

  addOption() {
    this.getOptionControls().push(new FormControl("", Validators.required));
  }

  ngOnDestroy(): void {
    this.pollQuestionService.clearViewEditModePollQuestion();
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
