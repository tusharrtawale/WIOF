import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-eq-widget-test",
  templateUrl: "./eq-widget-test.component.html",
  styleUrls: ["./eq-widget-test.component.scss"],
})
export class EqWidgetTestComponent implements OnInit {
  food: any="nothing";

  message: string;

  constructor() {}

  ngOnInit() {
    this.updatePhPointer();
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
}
