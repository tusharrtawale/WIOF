import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from 'src/app/models/Video';
import { YoutubeVideoService } from 'src/app/services/youtube-video.service';
import {
  ELEMENT_VIDEOS_PLAYLIST_ID,
  PAGE_CATEGORY_MAP
} from 'src/app/app.constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss']
})
export class VideosPage implements OnInit {
  iframe_player = document.getElementsByTagName('iframe');
  videos: Observable<Video[]>;
  category: string;
  element: string;

  constructor(
    private videoService: YoutubeVideoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.has('element')) {
        const element = params.get('element');
        this.videos = this.videoService.getYoutubePlaylist(
          ELEMENT_VIDEOS_PLAYLIST_ID[element]
        );
        this.category = PAGE_CATEGORY_MAP[element];
        this.element = element;
      }
    });
  }
  ngOnDestroy() {
    this.stopVideo();
  }

  stopVideo() {
    console.log('play pressed');
    this.iframe_player[0].contentWindow.postMessage(
      '{"event":"command","func":"' + 'stopVideo' + '","args":""}',
      '*'
    );
  }
}
