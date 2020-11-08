import { Component, OnInit } from "@angular/core";
import {
  FormsModule,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
// import { AlertController, LoadingController } from "@ionic/angular";
import { combineLatest, throwError, Subject } from "rxjs";
import { catchError, map, takeUntil } from "rxjs/operators";
// import { ELEMENT_BLOG_CATEGORY } from "src/app/app.constants";
import { EnvDay } from "src/app/models/env-cal-data";
import { EnvcalServiceService } from "src/app/services/envcal-service.service";
import { UiUtilService } from "src/app/util/UiUtilService";

@Component({
  selector: "app-manage-calendar",
  templateUrl: "./manage-calendar.page.html",
  styleUrls: ["./manage-calendar.page.scss"]
})
export class ManageCalendarPage implements OnInit {
  addOccasionForm: FormGroup;
  image: string;
  imageToSave: any;
  loader;
  destroy$: Subject<boolean> = new Subject();

  constructor(
    private calendarService: EnvcalServiceService,
    private uiUtil: UiUtilService
  ) {}

  ngOnInit() {
    this.addOccasionForm = new FormGroup({
      day: new FormControl("", [Validators.required]),
      month: new FormControl("", [Validators.required]),
      occasion: new FormControl("", [Validators.required]),
      image: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      showMoreLink: new FormControl("", [Validators.required])
    });
  }

  onFileSelected(event) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    this.imageToSave = event.target.files[0];
    fileReader.onload = () => {
      this.image = fileReader.result as string;
    };
  }

  async addNewOccassion() {
    console.log("Hi");
    if (this.addOccasionForm.valid) {
      const occasion = EnvDay.createByForm(this.addOccasionForm);
      this.loader = await this.uiUtil.showLoader(
        "We are saving occasion details..."
      );
      combineLatest([
        this.calendarService.saveImage(this.imageToSave, occasion.image),
        this.calendarService.saveOccasion(occasion)
      ])
        .pipe(
          takeUntil(this.destroy$),
          map(([imgResp, occasionResp]) => {
            return [imgResp, occasionResp];
          }),
          catchError((err) => {
            return throwError(err);
          })
        )
        .subscribe(
          ([imgResp, blogResp]) => {
            this.loader.dismiss();
            this.addOccasionForm.reset();
            this.uiUtil.presentAlert("Success", "Occasion has been saved!", [
              "Cool!"
            ]);
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
  }
  // ngOnDestroy(){

  // }
}
