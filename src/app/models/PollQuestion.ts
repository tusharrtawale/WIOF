export class PollQuestion {
  pollId: string;
  question: string;
  options: string[];
  publishStartDate: number;
  publishEndDate: number;
  submitDate: number;
  status: string;

  constructor(
    pollId: string,
    question: string,
    options: string[],
    publishStartDate: number,
    publishEndDate: number,
    submitDate: number,
    status: string
  ) {
    this.pollId = pollId;
    this.question = question;
    this.options = options;
    this.publishStartDate = publishStartDate;
    this.publishEndDate = publishEndDate;
    this.submitDate = submitDate;
    this.status = status;
  }
}
