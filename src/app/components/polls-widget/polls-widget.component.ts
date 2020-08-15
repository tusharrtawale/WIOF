import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {map,catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import { Polls } from "../../models/Polls";
import { Poll } from "../../models/Poll";
import { PollsService } from "../../services/polls.service";
import { PollService } from "../../services/poll.service";
import { IpService } from "../../services/ip.service";
import { AlertController, LoadingController} from "@ionic/angular";


@Component({
  selector: 'app-polls-widget',
  templateUrl: './polls-widget.component.html',
  styleUrls: ['./polls-widget.component.scss'],
})
export class PollsWidgetComponent implements OnInit {

  poll:Poll;
  pollAllPublished:Poll[];
  IP4:any;
  IP6:any;
  showPollResult:boolean=false;
  showForm:boolean=true;
  errorShow:boolean=false;
  loader;


  wiofPollsForm:FormGroup;
  constructor(
    private pollsService: PollsService,
    private pollService: PollService,
    private ip:IpService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController

  ) { }

  ngOnInit() {
    this.wiofPollsForm= new FormGroup({
      name:new FormControl("", [Validators.required]),
      option:new FormControl("", [Validators.required])
    });
    this.ip.getIp4().subscribe(ipData => {this.IP4= ipData;});
    this.ip.getIp6().subscribe(ipData => {this.IP6= ipData;});

    
    this.poll={pollId:"kjsfdkjh", question:"",status:"",option1:"",
    option2:"",
    option3:"",
    option4:""}


    this.getPolls();


  }

  getPolls(){
    // this.pollService.getPoll().subscribe(data => this.pollAllPublished=data);
    this.pollService.getPoll().subscribe(data => {this.pollAllPublished= data;this.poll=this.pollAllPublished[0];});
    return this.poll;
  }

  submit()
  {
    console.log(this.wiofPollsForm.value)
    if (this.wiofPollsForm.valid) {
      const polls = Polls.createByForm(this.poll,this.wiofPollsForm,this.IP4.ip,this.IP6.ip)
      this.showLoader("Saving your vote...");
      this.pollsService.savePolls(polls)
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
          this.showPollResult=true;
          this.showForm=false;
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
    else{
      this.showError();
    }

    // this.subscribeButton=true;
  }

  showError(){
    this.errorShow=true;
    setTimeout(()=>this.errorShow=false,2000)
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
