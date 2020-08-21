import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Video } from "src/app/models/Video";
import { YoutubeVideoService } from "src/app/services/youtube-video.service";
import {
  ELEMENT_VIDEOS_PLAYLIST_ID,
  PAGE_CATEGORY_MAP,
} from "src/app/app.constants";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.page.html",
  styleUrls: ["./videos.page.scss"],
})
export class VideosPage implements OnInit {
  videos: Observable<Video[]>;
  category: string;
  elementThemeClass: string;

  constructor(
    private videoService: YoutubeVideoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((paramsMap) => {
      if (paramsMap["element"]) {
        this.category = PAGE_CATEGORY_MAP[paramsMap["element"]];
        this.videos = this.videoService.getYoutubePlaylist(
          ELEMENT_VIDEOS_PLAYLIST_ID[paramsMap["element"]]
        );
        this.elementThemeClass = paramsMap["element"];
      }
    });
  }
}
