import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {map,catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import { Polls } from "../../models/Polls";
import { Poll } from "../../models/Poll";
import { PollsService } from "../../services/polls.service";
import { IpService } from "../../services/ip.service";
import { AlertController, LoadingController} from "@ionic/angular";


@Component({
  selector: 'app-polls-widget',
  templateUrl: './polls-widget.component.html',
  styleUrls: ['./polls-widget.component.scss'],
})
export class PollsWidgetComponent implements OnInit {

  poll:Poll;
  IP4:any;
  IP6:any;
  loader;

  wiofPollsForm:FormGroup;
  constructor(
    private pollsService: PollsService,
    private ip:IpService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController

  ) { }

  ngOnInit() {
    this.wiofPollsForm= new FormGroup({
      name:new FormControl("", [Validators.required]),
      option:new FormControl("", [Validators.required])
    });
    this.ip.getIp4().subscribe(ipData => {this.IP4= ipData;console.log(this.IP4)});
    this.ip.getIp6().subscribe(ipData => {this.IP6= ipData;console.log(this.IP4)});

    this.poll={pollId:"kjsfdkjh", question:"First sample question?",status:"published",option1:"First opt",
    option2:"Second opt",
    option3:"Third opt",
    option4:"Fourth opt"}

  }

  submit()
  {
    console.log(this.wiofPollsForm.value)
    if (this.wiofPollsForm.valid) {
      const polls = Polls.createByForm(this.poll,this.wiofPollsForm,this.IP4.ip,this.IP6.ip)
      this.showLoader("Saving your vote...");
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
          this.loader.dismiss();
          this.presentAlert("Vote Recorded", `Your vote has been recorded. Thanks ${this.wiofPollsForm.get('name').value} for voting..!!`, ["Okay"]);
          this.wiofPollsForm.reset();      
        },
        (error) => {
          this.loader.dismiss();
          this.presentAlert(
            "Error",
            "Uh oh! We could not save it. Please try again.",
            ["OK"]
          );
          console.log(error);
        }
      );

    }
    // this.subscribeButton=true;
  }

  async presentAlert(header: string, message: string, buttons: string[]) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: buttons,
    });
    await alert.present();
  }

  async showLoader(message: string) {
    this.loader = await this.loadingCtrl.create({
      message: message,
    });
    this.loader.present();
  }


}
