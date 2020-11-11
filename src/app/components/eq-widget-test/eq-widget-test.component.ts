import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-eq-widget-test",
  templateUrl: "./eq-widget-test.component.html",
  styleUrls: ["./eq-widget-test.component.scss"]
})
export class EqWidgetTestComponent implements OnInit {
  @Input() gpr: string[]; //gender, parameter, result
  food: any = "nothing";

  firstBlockWidth: string;
  secondBlockWidth: string;
  thirdBlockWidth: string;
  arrowPositionBracket: string;
  arrowPosition: string;
  message: string;

  constructor() {}

  ngOnInit() {
    // this.updatePhPointer();
    this.updateRanges();
    this.positionArrow();

    // this.generateMessage();
  }

  ngOnChanges() {
    this.updatePhPointer();
    // this.generateMessage();
  }

  updatePhPointer() {
    if (this.food.name === "Default") {
      this.message = "Please select a food to find its pH value.";
      return "ph7";
    } else {
      this.message = `ph Level of ${this.food.name} is ${this.food.value}`;
      return `ph${this.food.value}`;
    }
  }

  // generateMessage(){
  //   if(!this.food){
  //     this.message="Please select a food to find its pH value."
  //   }
  //   else if(this.food){
  //     this.message=`ph Level of ${this.food.name} is ${this.food.value}`;
  //   }
  // }

  positionArrow() {
    // this.arrowPosition=String((Number(this.gpr[2])/40)*100)+"%";
    this.arrowPositionBracket = this.gpr[2] + "%";
    this.arrowPosition = "calc(" + Number(this.gpr[2]) + "%" + " - 9px)";
  }

  updateRanges() {
    if (this.gpr[0] == "m" && this.gpr[1] == "1") {
      this.firstBlockWidth = "52.5%";
      this.secondBlockWidth = "27.5%";
      this.thirdBlockWidth = "20%";
    } else if (this.gpr[0] == "f" && this.gpr[1] == "1") {
      this.firstBlockWidth = "60%";
      this.secondBlockWidth = "27.5%";
      this.thirdBlockWidth = "12.5%";
    } else if (this.gpr[0] == "m" && this.gpr[1] == "2") {
      this.firstBlockWidth = "62.5%";
      this.secondBlockWidth = "25%";
      this.thirdBlockWidth = "12.5%";
    } else if (this.gpr[0] == "f" && this.gpr[1] == "2") {
      this.firstBlockWidth = "57.5%";
      this.secondBlockWidth = "27.5%";
      this.thirdBlockWidth = "15%";
    } else if (this.gpr[0] == "m" && this.gpr[1] == "3") {
      this.firstBlockWidth = "57.5%";
      this.secondBlockWidth = "30%";
      this.thirdBlockWidth = "12.5%";
    } else if (this.gpr[0] == "f" && this.gpr[1] == "3") {
      this.firstBlockWidth = "57.5%";
      this.secondBlockWidth = "27.5%";
      this.thirdBlockWidth = "15%";
    }
  }
}
