import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { map, catchError, takeUntil } from "rxjs/operators";
import { throwError, Subject, forkJoin, pipe, combineLatest } from "rxjs";
import { Polls } from "../../models/Polls";
import { Poll } from "../../models/Poll";
import { PollsService } from "../../services/polls.service";
import { PollService } from "../../services/poll.service";
import { IpService } from "../../services/ip.service";
import { AlertController, LoadingController } from "@ionic/angular";

@Component({
  selector: "app-polls-widget",
  templateUrl: "./polls-widget.component.html",
  styleUrls: ["./polls-widget.component.scss"],
})
export class PollsWidgetComponent implements OnInit, OnDestroy {
  poll: Poll;
  IP4: any;
  IP6: any;
  showPollResult: boolean = false;
  showForm: boolean = true;
  errorShow: boolean = false;
  loader;
  destroy$: Subject<boolean> = new Subject();

  wiofPollsForm: FormGroup;
  constructor(
    private pollsService: PollsService,
    private pollService: PollService,
    private ip: IpService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.wiofPollsForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      option: new FormControl("", [Validators.required]),
    });
    
    this.poll = {} as Poll;
    combineLatest([this.ip.getIp4(), this.ip.getIp6(), this.pollService.getPoll()])
      .pipe(takeUntil(this.destroy$), map(data => data))
      .subscribe(([ip4Data, ip6Data, pollData]) => {
        this.IP4 = ip4Data;
        this.IP6 = ip6Data;
        this.poll = pollData[0];
      });
  }

  async submit() {
    if (this.wiofPollsForm.valid) {
      const polls = Polls.createByForm(
        this.poll,
        this.wiofPollsForm,
        this.IP4.ip,
        this.IP6.ip
      );
      await this.showLoader("Saving your vote...");
      this.pollsService
        .savePolls(polls)
        .pipe(
          takeUntil(this.destroy$),
          map((pollsRes) => {
            return pollsRes;
          }),
          catchError((err) => {
            return throwError(err);
          })
        )
        .subscribe(
          (subscribeRes) => {
            this.loader.dismiss();
            this.presentAlert(
              "Vote Recorded",
              `Your vote has been recorded. Thanks ${
                this.wiofPollsForm.get("name").value
              } for voting..!!`,
              ["Okay"]
            );
            this.wiofPollsForm.reset();
            this.showPollResult = true;
            this.showForm = false;
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
    } else {
      this.showError();
    }
  }

  showError() {
    this.errorShow = true;
    setTimeout(() => (this.errorShow = false), 2000);
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

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
