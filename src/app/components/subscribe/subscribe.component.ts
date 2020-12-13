import { Component, OnInit, Input } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { throwError, Subject } from "rxjs";
import { Subscriber } from "../../models/Subscriber";
import { catchError, map, takeUntil } from "rxjs/operators";
import { SubscriptionService } from "../../services/subscription.service";
import { UiUtilService } from "src/app/util/UiUtilService";

@Component({
  selector: "app-subscribe",
  templateUrl: "./subscribe.component.html",
  styleUrls: ["./subscribe.component.scss"]
})
export class SubscribeComponent implements OnInit {
  @Input() page:string;
  addSubscriberForm: FormGroup;
  subscribeButton: Boolean;
  error: String;
  loader;
  destroy$: Subject<boolean> = new Subject();
  

  constructor(
    private subscribeService: SubscriptionService,
    private uiUtil: UiUtilService
  ) {}

  ngOnInit() {
    this.subscribeButton = true;
    this.addSubscriberForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ])
    });
    this.openSubscriptionForm();
  }

  getElement(element){
    if(element==this.page){
      return true;

    }
    else{
      return false;
    }
  }

  async onSubmit() {
    if (this.addSubscriberForm.valid) {
      const subscriber = Subscriber.createByForm(this.addSubscriberForm);
      this.loader = await this.uiUtil.showLoader("Saving your subscription...");
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
            this.uiUtil.presentAlert(
              "Success",
              "You are now subscribed to WIOF Newsletter",
              ["Cool!"]
            );
          },
          (error) => {
            this.loader.dismiss();
            this.uiUtil.presentAlert(
              "Error",
              "Uh oh! We could not save it. Please try again.",
              ["OK"]
            );
          }
        );
    }
    this.subscribeButton = true;
    this.setSubscribedFlag();
  }

  setSubscribedFlag(){
    localStorage.setItem("subscribed","true");
  }

  setSubscriptionOpenedFlag(){
    sessionStorage.setItem("subscriptionBoxOpened","true")
  }

  getSubscriptionOpenedFlag(){
    if(sessionStorage.getItem("subscriptionBoxOpened")){
      return true;
    }
    return false;
  }

  getSubscribedFlag(){
    if(localStorage.getItem("subscribed")){
      return true;
    }
    return false;
  }

  openSubscriptionForm(){
    if(!this.getSubscribedFlag()){      
      setTimeout( ()=>{ 
        this.triggerOpen();
      },10000);
    }    
  }

  triggerOpen(){
    if(!this.getSubscriptionOpenedFlag()){
      this.subscribeButton=false;
      this.setSubscriptionOpenedFlag()
    }
  }

  onSubscribeButtonClick() {
    this.subscribeButton = false;
  }

  onBack() {
    this.subscribeButton = true;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
