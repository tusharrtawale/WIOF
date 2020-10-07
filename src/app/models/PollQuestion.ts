import { Form, FormGroup } from "@angular/forms";

export class PollQuestion {
  question: string;
  options: string[];
  publishStartDate: number;
  publishEndDate: number;
  submitDate: number;
  status: string;

  constructor(
    question: string,
    options: string[],
    publishStartDate: number,
    publishEndDate: number,
    submitDate: number,
    status: string
  ) {
    this.question = question;
    this.options = options;
    this.publishStartDate = publishStartDate;
    this.publishEndDate = publishEndDate;
    this.submitDate = submitDate;
    this.status = status;
  }

  public static createByForm(addPollForm: FormGroup) {
    return new PollQuestion(
      addPollForm.value.question,
      addPollForm.value.options,
      new Date(addPollForm.value.publishStartDate).getTime(),
      new Date(addPollForm.value.publishEndDate).getTime(),
      new Date(addPollForm.value.submitDate).getTime(),
      addPollForm.value.status
    );
  }
}
