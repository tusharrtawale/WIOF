import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-food-ph-indicator',
  templateUrl: './food-ph-indicator.component.html',
  styleUrls: ['./food-ph-indicator.component.scss'],
})
export class FoodPhIndicatorComponent implements OnInit {

  phvalue: number = 0;
  constructor() { 



  }

  ngOnInit() {}

  onSubmit(form: NgForm)
  {
console.log(form);
  }
  

    
  }

