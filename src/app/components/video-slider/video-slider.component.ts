import { HostListener, Component, Input, OnInit, AfterViewInit } from "@angular/core";
import { VIDEO_SLIDER_OPTIONS } from "src/app/app.constants";
import { Video } from "src/app/models/Video";

@Component({
  selector: "app-video-slider",
  templateUrl: "./video-slider.component.html",
  styleUrls: ["./video-slider.component.scss"],
})
export class VideoSliderComponent implements OnInit {
  @Input() videoList: Array<Video>;
  @Input() element: String;
  videoSliderClass: String;
  width: number;

  @HostListener("window:resize", [])
  public onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
        this.detectScreenSize();
    }

  detectScreenSize() {
        this.width = window.innerWidth;
    }

  slideOpts = VIDEO_SLIDER_OPTIONS;

  constructor() {}

  ngOnInit() {
    this.videoSliderClass = `wiof-${this.element}`;
  }
  showNavigator(){
      if (this.width>=1024){
        // slidesPerView: 4
        if (this.videoList.length<5){
          return false;
        }
        else {
          return true;
        }

      }
      else if (this.width<1024 && this.width>=767){ 
        // slidesPerView: 3
        if (this.videoList.length<4){
          return false;
        }
        else {
          return true;
        }

      }
      else if (this.width<767 && this.width>=480){
        // slidesPerView: 2
        if (this.videoList.length<3){
          return false;
        }
        else {
          return true;
        }

      }
      else if (this.width<480){
        // slidesPerView: 1
        if (this.videoList.length<2){
          return false;
        }
        else {
          return true;
        }

      }

    // if (this.videoList.length<6){
    //   return false;
    // }
    // else {
    //   return true;
    // }
  }
}
