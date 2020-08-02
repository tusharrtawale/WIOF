import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-energy-widget',
  templateUrl: './energy-widget.component.html',
  styleUrls: ['./energy-widget.component.scss'],
})
export class EnergyWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {}


  onSubmit(form: NgForm){

    console.log(form);
  }
}
