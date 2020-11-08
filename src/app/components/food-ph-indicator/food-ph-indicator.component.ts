import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-food-ph-indicator",
  templateUrl: "./food-ph-indicator.component.html",
  styleUrls: ["./food-ph-indicator.component.scss"]
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
      { name: "Bacon", value: 3 },
      { name: "Ice Cream", value: 3 },
      { name: "Nuts", value: 3 },
      { name: "Cottage Cheese", value: 5 },
      { name: "Cranberries", value: 6 },
      { name: "Plain Yogurt", value: 6 },
      { name: "Brown & Basmati rice", value: 3 },
      { name: "Raw Cow & Goat Milk", value: 7 },
      { name: "Apple", value: 8 },
      { name: "Raw Celery", value: 9 },
      { name: "Watermelon", value: 7 },
      { name: "Fresh Lemon", value: 10 }
    ];
  }
  updateBridgeVariable() {
    this.bridgeVariable = this.selectedFood;
  }
}
