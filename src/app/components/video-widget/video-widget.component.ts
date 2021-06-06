import { Component, OnInit, Input } from "@angular/core";
import { VIDEO_PLAYER_TITLES, VIDEO_PLAYER_VIDEOS } from "../../app.constants";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-video-widget",
  templateUrl: "./video-widget.component.html",
  styleUrls: ["./video-widget.component.scss"]
})
export class VideoWidgetComponent implements OnInit {
  @Input() element: string;
  iframe_player = document.getElementsByTagName("iframe");

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
      `https://www.youtube.com/embed/${this.videoLink}?enablejsapi=1&version=3&playerapiid=ytplayer?controls=1`
    );
  }

  ngOnDestroy() {
    this.stopVideo();
  }

  stopVideo() {
    console.log("play pressed");
    this.iframe_player[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "stopVideo" + '","args":""}',
      "*"
    );
  }

  setPlayerTitle() {
    this.videoPlayerTitle = VIDEO_PLAYER_TITLES[this.element.toUpperCase()];
  }

  setVideoLink() {
    this.videoLink = VIDEO_PLAYER_VIDEOS[this.element.toUpperCase()];
  }
}
