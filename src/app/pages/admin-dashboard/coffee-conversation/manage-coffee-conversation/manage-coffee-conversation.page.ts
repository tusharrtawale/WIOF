import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subject, throwError } from "rxjs";
import { catchError, map, takeUntil } from "rxjs/operators";
import { CoffeeConversation } from "src/app/models/CoffeeConversation";
import { CoffeeConversationService } from "src/app/services/coffee-conversation.service";
import { UiUtilService } from "src/app/util/UiUtilService";

@Component({
  selector: "app-manage-coffee-conversation",
  templateUrl: "./manage-coffee-conversation.page.html",
  styleUrls: ["./manage-coffee-conversation.page.scss"]
})
export class ManageCoffeeConversationPage implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  coffeeConversationList$: Observable<CoffeeConversation[]>;

  constructor(
    private coffeeConversationService: CoffeeConversationService,
    private uiUtil: UiUtilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initPage();
  }

  initPage() {
    this.coffeeConversationList$ = this.coffeeConversationService
      .getCoffeeConversations()
      .pipe(
        takeUntil(this.destroy$),
        map((coffeeConversationList) => {
          return coffeeConversationList
            .map((coffeeConversation) => {
              coffeeConversation.interviewDate = new Date().getTime();
              return coffeeConversation;
            })
            .sort((a, b) => b.interviewDate - a.interviewDate);
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  refreshData() {
    this.initPage();
  }

  addCoffeeConversation() {
    this.router.navigate(["coffee-conversation", "new"], {
      relativeTo: this.route
    });
  }

  viewCoffeeConversationDetails(coffeeConversation: CoffeeConversation) {
    this.coffeeConversationService.setViewEditModeCoffeeConversation(
      coffeeConversation
    );
    this.router.navigate(["coffee-conversation", "edit"], {
      relativeTo: this.route,
      queryParams: { id: coffeeConversation.ccId }
    });
  }

  deleteCoffeeConversation(
    coffeeConversationList: CoffeeConversation[],
    index: number,
    coffeeConversation: CoffeeConversation
  ) {
    this.uiUtil.presentAlert(
      "Confirm",
      "Are you sure you want to delete the coffeeConversation?",
      [
        {
          text: "Yes",
          handler: async () => {
            await this.delCoffeeConversation(
              coffeeConversationList,
              index,
              coffeeConversation
            );
          }
        },
        {
          text: "No",
          role: "cancel"
        }
      ]
    );
  }

  private async delCoffeeConversation(
    coffeeConversationList: CoffeeConversation[],
    index: number,
    coffeeConversation: CoffeeConversation
  ) {
    const loader = await this.uiUtil.showLoader(
      "We are deleting the coffee conversation..."
    );
    this.coffeeConversationService
      .deleteCoffeeConversation(coffeeConversation.ccId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        //TODO handle delete error case
        (response) => {
          console.log(response);
          loader.dismiss();
          this.uiUtil.presentAlert(
            "Success",
            "Coffee conversation successfully deleted!",
            ["OK"]
          );
          coffeeConversationList.splice(index, 1);
        },
        (error) => {
          console.log(error);
          loader.dismiss();
          this.uiUtil.presentAlert(
            "Error",
            "Uh Oh! We could not delete coffee conversation. Please try again.",
            ["OK"]
          );
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
