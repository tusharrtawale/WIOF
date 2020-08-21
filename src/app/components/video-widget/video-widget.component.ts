import { Component, OnInit, Input } from "@angular/core";
import {
  VIDEO_PLAYER_TITLES,
  VIDEO_PLAYER_VIDEOS,
  ELEMENT_SELECT,
} from "../../app.constants";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-video-widget",
  templateUrl: "./video-widget.component.html",
  styleUrls: ["./video-widget.component.scss"],
})
export class VideoWidgetComponent implements OnInit {
  @Input() element: string;

  videoPlayerTitle: string;
  videoLink: string;
  urlSafe: SafeResourceUrl;
  videoPlayerClass: string;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.videoPlayerClass = `wiof-${this.element}`;
    this.setPlayerTitle();
    this.setVideoLink();
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.videoLink}?controls=1`
    );
  }

  setPlayerTitle() {
    if (this.element === ELEMENT_SELECT.AIR) {
      this.videoPlayerTitle = VIDEO_PLAYER_TITLES.AIR;
    } else if (this.element === ELEMENT_SELECT.WATER) {
      this.videoPlayerTitle = VIDEO_PLAYER_TITLES.WATER;
    } else if (this.element === ELEMENT_SELECT.EARTH) {
      this.videoPlayerTitle = VIDEO_PLAYER_TITLES.EARTH;
    } else if (this.element === ELEMENT_SELECT.FIRE) {
      this.videoPlayerTitle = VIDEO_PLAYER_TITLES.FIRE;
    } else if (this.element === ELEMENT_SELECT.SPIRIT) {
      this.videoPlayerTitle = VIDEO_PLAYER_TITLES.SPIRIT;
    }
  }
  setVideoLink() {
    if (this.element === ELEMENT_SELECT.AIR) {
      this.videoLink = VIDEO_PLAYER_VIDEOS.AIR;
    } else if (this.element === ELEMENT_SELECT.WATER) {
      this.videoLink = VIDEO_PLAYER_VIDEOS.WATER;
    } else if (this.element === ELEMENT_SELECT.EARTH) {
      this.videoLink = VIDEO_PLAYER_VIDEOS.EARTH;
    } else if (this.element === ELEMENT_SELECT.FIRE) {
      this.videoLink = VIDEO_PLAYER_VIDEOS.FIRE;
    } else if (this.element === ELEMENT_SELECT.SPIRIT) {
      this.videoLink = VIDEO_PLAYER_VIDEOS.SPIRIT;
    }
  }
}
