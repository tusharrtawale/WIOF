import { SafeResourceUrl } from "@angular/platform-browser";

export class CoffeeConversation {
  ccId: string;
  topic: string;
  topicShortDesc: string;
  topicDesc: string;
  category: string;
  interviewerName: string;
  intervieweeName: string;
  intervieweeDesc: string;
  interviewDate: number;
  videoLink: string;
  knowMoreLink: string;
  sanitizedLink: SafeResourceUrl;

  constructor(
    ccId: string,
    topic: string,
    topicShortDesc: string,
    topicDesc: string,
    category: string,
    interviewerName: string,
    intervieweeName: string,
    intervieweeDesc: string,
    interviewDate: number,
    videoLink: string,
    knowMoreLink: string
  ) {
    this.ccId = ccId;
    this.topic = topic;
    this.topicShortDesc = topicShortDesc;
    this.topicDesc = topicDesc;
    this.category = category;
    this.interviewerName = interviewerName;
    this.intervieweeName = intervieweeName;
    this.intervieweeDesc = intervieweeDesc;
    this.interviewDate = interviewDate;
    this.videoLink = videoLink;
    this.knowMoreLink = knowMoreLink;
  }
}
