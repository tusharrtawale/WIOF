import { HostListener, Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

import { BREAKING_NEWS_SLIDER_OPTIONS } from "src/app/app.constants";

@Component({
  selector: 'app-env-cal-dialog',
  templateUrl: './env-cal-dialog.component.html',
  styleUrls: ['./env-cal-dialog.component.scss'],
})
export class EnvCalDialogComponent implements OnInit {
  @Input() occasionDetails:any;
  @Output() close:EventEmitter<any>= new EventEmitter;
  width: number;
  slideOpts = BREAKING_NEWS_SLIDER_OPTIONS;



  @HostListener("window:resize", [])
  public onResize() {
    this.detectScreenSize();
  }
  constructor() { }


  ngAfterViewInit() {
    this.detectScreenSize();
  }

  ngOnInit() {
    console.log(this.occasionDetails)
  }


  detectScreenSize() {
    this.width = window.innerWidth;
  }
  closeDialog(){
    this.close.emit("close");
  }

}
