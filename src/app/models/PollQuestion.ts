import { Form, FormGroup } from "@angular/forms";

export class PollQuestion {
  question: string;
  options: string[];
  releaseDate: number;
  expiryDate: number;
  submitDate: number;
  status: string;

  constructor(
    question: string,
    options: string[],
    releaseDate: number,
    expiryDate: number,
    submitDate: number,
    status: string
  ) {
    this.question = question;
    this.options = options;
    this.releaseDate = releaseDate;
    this.expiryDate = expiryDate;
    this.submitDate = submitDate;
    this.status = status;
  }

  public static createByForm(addPollForm: FormGroup) {
    return new PollQuestion(
      addPollForm.value.question,
      addPollForm.value.options,
      new Date(addPollForm.value.releaseDate).getTime(),
      new Date(addPollForm.value.releaseDate).getTime(),
      new Date(addPollForm.value.releaseDate).getTime(),
      addPollForm.value.status
    );
  }
}
