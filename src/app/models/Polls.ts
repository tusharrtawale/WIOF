import { FormGroup } from "@angular/forms";

export class Polls{
    option:String;
    constructor(option){
        this.option=option;
    }


static createByForm(wiofPollsForm: FormGroup) {
    return new Polls(
        wiofPollsForm.value.option
    );
  }
}