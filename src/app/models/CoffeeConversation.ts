import { SafeResourceUrl } from "@angular/platform-browser";

export class CoffeeConversation {
  ccId: string;
  topic: string;
  topicShortDesc: string;
  topicDesc: string;
  inerviewerName: string;
  intervieweeName: string;
  intervieweeDesc: string;
  interviewDate: number;
  category: string;
  videoLink: string;
  knowMoreLink: string;
  sanitizedLink: SafeResourceUrl;
}
