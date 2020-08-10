//Schema for the Weekly Poll 

import { FormGroup } from "@angular/forms";

export class Poll{
    pollId:string;
    question:string;
    option1:string;
    option2:string;
    option3:string;
    option4:string;
    status:string;

    constructor(pollId,question,option1,option2,option3,option4,status){
        this.pollId=pollId;
        this.question=question;
        this.option1=option1;
        this.option2=option2;
        this.option3=option3;
        this.option4=option4;
        this.status=status;
    }

    static createByForm(createPollForm: FormGroup) {
        return new Poll(
            createPollForm.value.pollId,
            createPollForm.value.question,
            createPollForm.value.option1,
            createPollForm.value.option2,
            createPollForm.value.option3,
            createPollForm.value.option4,
            createPollForm.value.status
        );
      }
}