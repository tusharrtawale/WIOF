import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {

  subscribeButton: Boolean;

  constructor() { }

  ngOnInit() { 
    this.subscribeButton=true;
    console.log("subscribe arrived")
  }

  onSubmit(form: NgForm)
{

  console.log(form);
  this.subscribeButton=true;
}
onSubscribe()
{
this.subscribeButton=false;

}
onBack()
{
  this.subscribeButton=true;
}

}
