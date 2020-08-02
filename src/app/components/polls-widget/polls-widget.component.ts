import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {map,catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import { Polls } from "../../models/Polls";
import { PollsService } from "../../services/polls.service"


@Component({
  selector: 'app-polls-widget',
  templateUrl: './polls-widget.component.html',
  styleUrls: ['./polls-widget.component.scss'],
})
export class PollsWidgetComponent implements OnInit {

  wiofPollsForm:FormGroup;
  constructor(
    private pollsService: PollsService
  ) { }

  ngOnInit() {
    this.wiofPollsForm= new FormGroup({
      option:new FormControl("", [Validators.required]),
    })
  }

  submit()
  {
    if (this.wiofPollsForm.valid) {
      const polls = Polls.createByForm(this.wiofPollsForm);
      // this.showLoader("Saving your subscription...");
      this.pollsService.saveSubscriber(polls)
      .pipe(
        map(pollsRes => {
          return pollsRes;
        }),
        catchError((err) => {
          return throwError(err);
        }))
      .subscribe(
        subscribeRes => {
          // this.loader.dismiss();
          this.wiofPollsForm.reset();
          // this.presentAlert("Success", "You are now subscribed to WIOF Newsletter", ["Cool!"]);
        },
        (error) => {
          // this.loader.dismiss();
          // this.presentAlert(
          //   "Error",
          //   "Uh oh! We could not save it. Please try again.",
          //   ["OK"]
          // );
          console.log(error);
        }
      );

    }
    // this.subscribeButton=true;
  }


}
