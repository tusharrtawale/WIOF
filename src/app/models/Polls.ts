import { FormGroup } from "@angular/forms";
import { Poll } from "./Poll";

export class Polls {
  id: string;
  poll: Poll;
  option: string;
  ip4?: string;
  ip6?: string;
  name: string;
  constructor(poll: Poll, option, name, ip4?, ip6?) {
    this.poll = poll;
    this.option = option;
    this.ip4 = ip4;
    this.ip6 = ip6;
    this.name = name;
  }

  static createByForm(poll: Poll, wiofPollsForm: FormGroup, ip4?, ip6?) {
    return new Polls(
      poll,
      wiofPollsForm.value.option,
      wiofPollsForm.value.name,
      ip4,
      ip6
    );
  }
}

//Read user Ip  https://api6.ipify.org?format=json  https://api.ipify.org?format=json
//add it to the poll
//read user name
//add it to poll
//read user response
//add it to poll
//save this data in present poll collection
//collection created in backend when poll initiated from dashboard
//dashboard has a option add-poll
//once user records responce show poll result
//if user revisits then identify using ip , cookie and show only results and a message that you already voted
//show previous polls results in a new screen inside widget
//
