import { FormGroup } from "@angular/forms";

const presentDateTime=new Date();
const saveDate=presentDateTime.getDate() +"/" + presentDateTime.getMonth() +"/" + presentDateTime.getFullYear()+" "+presentDateTime.getHours()+":"+presentDateTime.getMinutes();

export class Subscriber {
  id:string;
  datetime?:string;
  firstName: string;
  lastName: string;
  email: string;
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.datetime=saveDate;
  }

  static createByForm(addSubscriberForm: FormGroup) {
    return new Subscriber(
      addSubscriberForm.value.firstName,
      addSubscriberForm.value.lastName,
      addSubscriberForm.value.email
    );
  }
}
