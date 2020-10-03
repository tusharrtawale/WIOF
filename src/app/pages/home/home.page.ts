import { Component } from "@angular/core";
import { ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  // @ViewChild("cp", {read: ElementRef}) cp: ElementRef;
  viewConcentPopup = true;

  // ngAfterViewInit(): void {
  // outputs `I am span`
  // console.log(this.cp.nativeElement.read);
  // }

  constructor() {}
  onAccept() {
    this.viewConcentPopup = false;
  }
}
