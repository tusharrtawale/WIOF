import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-food-ph-indicator",
  templateUrl: "./food-ph-indicator.component.html",
  styleUrls: ["./food-ph-indicator.component.scss"],
})
export class FoodPhIndicatorComponent implements OnInit {
  foodOptions: any[];
  selectedFood: any;
  bridgeVariable: any = { name: "Default", value: 8 };
  constructor() {}

  ngOnInit() {
    this.foodOptions = [
      { name: "Apple", value: 2 },
      { name: "Mango", value: 3 },
      { name: "Banana", value: 4 },
    ];
  }
  updateBridgeVariable() {
    this.bridgeVariable = this.selectedFood;
  }
}
