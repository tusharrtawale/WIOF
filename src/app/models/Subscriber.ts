import { FormGroup } from "@angular/forms";

export class Subscriber {
  firstName: String;
  lastName: String;
  email: String;
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  static createByForm(addSubscriberForm: FormGroup) {
    return new Subscriber(
      addSubscriberForm.value.firstName,
      addSubscriberForm.value.lastName,
      addSubscriberForm.value.email
    );
  }
}
