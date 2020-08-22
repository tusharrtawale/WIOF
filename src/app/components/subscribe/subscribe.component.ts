import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { throwError, Subject } from "rxjs";
import { Subscriber } from "../../models/Subscriber";
import { catchError, map, takeUntil } from "rxjs/operators";
import { SubscriptionService } from "../../services/subscription.service";

@Component({
  selector: "app-subscribe",
  templateUrl: "./subscribe.component.html",
  styleUrls: ["./subscribe.component.scss"],
})
export class SubscribeComponent implements OnInit {
  addSubscriberForm: FormGroup;
  subscribeButton: Boolean;
  error: String;
  loader;
  destroy$: Subject<boolean> = new Subject();

  constructor(
    private alertCtrl: AlertController,
    private subscribeService: SubscriptionService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.subscribeButton = false;
    this.addSubscriberForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  async onSubmit() {
    if (this.addSubscriberForm.valid) {
      const subscriber = Subscriber.createByForm(this.addSubscriberForm);
      await this.showLoader("Saving your subscription...");
      this.subscribeService
        .saveSubscriber(subscriber)
        .pipe(
          takeUntil(this.destroy$),
          map((subscribeRes) => {
            return subscribeRes;
          }),
          catchError((err) => {
            return throwError(err);
          })
        )
        .subscribe(
          (subscribeRes) => {
            this.loader.dismiss();
            this.addSubscriberForm.reset();
            this.presentAlert(
              "Success",
              "You are now subscribed to WIOF Newsletter",
              ["Cool!"]
            );
          },
          (error) => {
            this.loader.dismiss();
            this.presentAlert(
              "Error",
              "Uh oh! We could not save it. Please try again.",
              ["OK"]
            );
          }
        );
    }
    this.subscribeButton = true;
  }

  onSubscribeButtonClick() {
    this.subscribeButton = false;
  }

  onBack() {
    this.subscribeButton = true;
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
