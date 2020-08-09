import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-ph-indicator-meter',
  templateUrl: './food-ph-indicator-meter.component.html',
  styleUrls: ['./food-ph-indicator-meter.component.scss'],
})
export class FoodPhIndicatorMeterComponent implements OnInit {
  @Input() phValue:number;

  constructor() { }

  ngOnInit() {
    this.phValue=8;
    this.updatePhPointer();
  }

  ngOnChange(){
    this.updatePhPointer();
  }
  updatePhPointer(){
      return `ph${this.phValue}`;
  }
}
