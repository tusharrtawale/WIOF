import { Component, Input, OnInit } from "@angular/core";
import { VIDEO_SLIDER_OPTIONS } from "src/app/app.constants";
import { Video } from "src/app/models/Video";

@Component({
  selector: "app-video-slider",
  templateUrl: "./video-slider.component.html",
  styleUrls: ["./video-slider.component.scss"],
})
export class VideoSliderComponent implements OnInit {
  @Input() videoList: Array<Video>;
  @Input() element:String;

  slideOpts = VIDEO_SLIDER_OPTIONS;

  constructor() {}

  ngOnInit() {}
}
