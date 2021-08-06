import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { VIDEO_PLAYER_TITLES, VIDEO_PLAYER_VIDEOS } from '../../app.constants';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppUtilService } from 'src/app/util/AppUtilService';

@Component({
  selector: 'app-video-widget',
  templateUrl: './video-widget.component.html',
  styleUrls: ['./video-widget.component.scss']
})
export class VideoWidgetComponent implements OnInit {
  @Input() element: string;
  videoPlayerTitle: string;
  videoLink: string;
  urlSafe: SafeResourceUrl;
  videoPlayerClass: string;

  constructor(
    private sanitizer: DomSanitizer,
    private appUtilService: AppUtilService
  ) {}

  ngOnInit() {
    this.appUtilService.stopVideos();
    this.videoPlayerClass = `wiof-${this.element}`;
    this.setPlayerTitle();
    this.setVideoLink();
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.videoLink}?enablejsapi=1&version=3&playerapiid=ytplayer?controls=1`
    );
  }

  setPlayerTitle() {
    this.videoPlayerTitle = VIDEO_PLAYER_TITLES[this.element.toUpperCase()];
  }

  setVideoLink() {
    this.videoLink = VIDEO_PLAYER_VIDEOS[this.element.toUpperCase()];
  }
}
