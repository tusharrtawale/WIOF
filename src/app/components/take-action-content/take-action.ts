import { SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

export class TakeAction {
  tab: TabData;
  links: ActionLink[];
}

class TabData {
  title: string;
  image: string;
  selectedImage: string;
}

class ActionLink {
  heading: string;
  desc: string;
  link: string;
  linkSafe: SafeResourceUrl;
}
