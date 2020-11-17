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
}
