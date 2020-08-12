import { Component, OnInit } from '@angular/core';
// import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-food-ph-indicator',
  templateUrl: './food-ph-indicator.component.html',
  styleUrls: ['./food-ph-indicator.component.scss'],
})
export class FoodPhIndicatorComponent implements OnInit {

  // phValue = "";
  foodOptions:any[];
  selectedFood:any;
  constructor() { 



  }

  ngOnInit() {
    this.foodOptions=[
      {name:'Apple',value:2},
      {name:'Mango',value:3},
      {name:'Banana',value:4}

    ]
  }


//   onSubmit(form: NgForm)
//   {
// console.log(form);

//   }
  
// onChange(event: any)
// {
//   this.phvalue= (<HTMLSelectElement>event.target).value;
// }

getPh()
{

}

  }

